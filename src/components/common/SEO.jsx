import { useEffect } from "react"

const SITE_URL = "https://pixnixdigital.com"
const SITE_NAME = "Pixnix Digital"
const DEFAULT_IMAGE = `${SITE_URL}/img/og-image.jpg`

/**
 * Sets/updates a <meta> tag by name or property, creating it if missing.
 */
function setMeta({ name, property, content }) {
  if (!content) return
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement("meta")
    if (name) tag.setAttribute("name", name)
    if (property) tag.setAttribute("property", property)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

function setLink(rel, href) {
  if (!href) return
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement("link")
    tag.setAttribute("rel", rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute("href", href)
}

function setJsonLd(id, data) {
  if (!data) return
  let tag = document.getElementById(id)
  if (!tag) {
    tag = document.createElement("script")
    tag.type = "application/ld+json"
    tag.id = id
    document.head.appendChild(tag)
  }
  tag.textContent = JSON.stringify(data)
}

function removeJsonLd(id) {
  const tag = document.getElementById(id)
  if (tag) tag.remove()
}

/**
 * <SEO /> — drop this once per page/route. It runs on mount and whenever
 * its props change (e.g. when a service/portfolio slug changes), and it
 * writes directly to <head> so the puppeteer prerender step (which waits
 * for networkidle0 and then reads page.content()) bakes the final tags
 * into the static HTML for that route.
 */
const SEO = ({
  title,
  description,
  keywords,
  path = "/",
  image = DEFAULT_IMAGE,
  jsonLd = null, // single object or array of objects
  noindex = false,
}) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    const canonicalUrl = `${SITE_URL}${path}`

    document.title = fullTitle

    setMeta({ name: "description", content: description })
    setMeta({ name: "keywords", content: keywords })
    setMeta({ name: "robots", content: noindex ? "noindex, follow" : "index, follow" })

    setLink("canonical", canonicalUrl)

    setMeta({ property: "og:type", content: "website" })
    setMeta({ property: "og:url", content: canonicalUrl })
    setMeta({ property: "og:title", content: fullTitle })
    setMeta({ property: "og:description", content: description })
    setMeta({ property: "og:image", content: image })
    setMeta({ property: "og:site_name", content: SITE_NAME })

    setMeta({ property: "twitter:card", content: "summary_large_image" })
    setMeta({ property: "twitter:url", content: canonicalUrl })
    setMeta({ property: "twitter:title", content: fullTitle })
    setMeta({ property: "twitter:description", content: description })
    setMeta({ property: "twitter:image", content: image })

    const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []
    schemas.forEach((schema, i) => setJsonLd(`page-schema-${i}`, schema))

    return () => {
      // Clean up page-specific schema so the next route doesn't inherit it
      schemas.forEach((_, i) => removeJsonLd(`page-schema-${i}`))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, path, image, noindex, JSON.stringify(jsonLd)])

  return null
}

export default SEO
export { SITE_URL, SITE_NAME, DEFAULT_IMAGE }
