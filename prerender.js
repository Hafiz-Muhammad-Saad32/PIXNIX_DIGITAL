// prerender.js
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './prerender-routes.js';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);

const PORT = 4173;
const DIST_DIR = path.resolve(currentDirPath, 'dist');

function startServer() {
  return new Promise((resolve) => {
    // IMPORTANT: -s enables SPA fallback (every path serves dist/index.html).
    // Without it, nested routes like /about or /services/website-development
    // 404 on first run (they don't exist as files yet), React never mounts,
    // and puppeteer bakes an empty shell into dist/<route>/index.html.
    const server = spawn('npx', ['serve', DIST_DIR, '-s', '-l', PORT], { shell: true });
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Accepting connections')) resolve(server);
    });
    setTimeout(() => resolve(server), 3000);
  });
}

async function prerender() {
  const server = await startServer();
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const failures = [];

  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    console.log('Rendering:', url);

    try {
      // Don't wait for network-idle: pages with WebGL (the About page's globe)
      // or blocked/slow third-party trackers (fonts, analytics) may never go
      // fully idle, which hangs this step indefinitely. domcontentloaded +
      // a fixed settle window is deterministic and far more reliable here.
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      // Give React Router / framer-motion / SEO useEffects / WebGL a beat to settle
      await new Promise((r) => setTimeout(r, 2500));

      const html = await page.content();

      // Sanity check: a real page should have a real <title> and a body
      // with meaningful visible text, not an empty #root shell.
      // (Regex-matching the exact end of the #root div is fragile — Vite's
      // module scripts and JSON-LD tags break a naive "</div><script>" match
      // and produce false-positive "empty" warnings even when content is fine.
      // Stripping all tags and measuring the remaining text is far more reliable.)
      const hasTitle = /<title>[^<]{5,}<\/title>/.test(html)
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/)
      const visibleText = (bodyMatch ? bodyMatch[1] : html)
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
      const rootContentLength = visibleText.length

      if (!hasTitle || rootContentLength < 200) {
        failures.push(route);
        console.warn(`  ⚠ WARNING: ${route} looks empty/incomplete (title ok: ${hasTitle}, visible text: ${rootContentLength} chars)`);
      }

      const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
    } catch (err) {
      failures.push(route);
      console.error(`  ✗ FAILED to render ${route}:`, err.message);
    }

    await page.close();
  }

  await browser.close();
  server.kill();

  if (failures.length) {
    console.error(`\nPrerendering finished with ${failures.length} problem route(s): ${failures.join(', ')}`);
    process.exitCode = 1;
  } else {
    console.log('\nPrerendering complete! All routes rendered with real content.');
  }
}

prerender();