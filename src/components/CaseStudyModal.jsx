import { useEffect } from "react";

export default function CaseStudyModal({ caseStudy, onClose }) {
  const isOpen = Boolean(caseStudy);

  // Lock scroll + close on Escape while open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-[6px] transition-opacity duration-250
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        sm:items-center max-[560px]:items-end max-[560px]:p-0`}
    >
      <div
        className={`modal-scroll w-full max-w-[860px] overflow-y-auto rounded-[24px] border border-[#ec1a8d]/35 bg-[#0e1418]
          transition-transform duration-300 ease-out max-h-[88vh]
          [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-[#0e1418] [&::-webkit-scrollbar-thumb]:bg-[#ec1a8d] [&::-webkit-scrollbar-thumb]:rounded-[4px]
          ${isOpen ? "translate-y-0 scale-100" : "translate-y-[30px] scale-[0.97]"}
          max-[560px]:max-h-[92vh] max-[560px]:max-w-full max-[560px]:rounded-b-none max-[560px]:border-x-0 max-[560px]:border-b-0`}
      >
        {caseStudy && (
          <>
            {/* Optional hero image */}
            {caseStudy.img && (
              <img
                src={caseStudy.img}
                alt={caseStudy.name}
                loading="lazy"
                decoding="async"
                className="block h-[240px] w-full rounded-t-[20px] object-cover object-center  max-[560px]:h-[180px]"
              />
            )}

            {/* Hero section */}
            <div className="relative border-b border-[rgba(255,255,255,0.07)] bg-gradient-to-b from-[#ec1a8d]/5 to-transparent px-9 pb-7 pt-7 max-[560px]:px-[18px] max-[560px]:pb-5 max-[560px]:pt-5">
              <div className="mb-3 flex justify-end">
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/55 text-base text-white backdrop-blur-sm transition-colors duration-200 hover:border-[#ec1a8d] hover:bg-[#ec1a8d]/20"
                >
                  ✕
                </button>
              </div>

              <span className="mb-3.5 inline-flex items-center rounded-full border border-[#ec1a8d]/25 bg-[#ec1a8d]/10 px-3 py-1.5 text-[11.5px] font-bold tracking-wide text-[#ff3aa0]">
                {caseStudy.cat}
              </span>

              <h1 className="mb-2.5 text-[26px] leading-[1.2] text-[#f5f6f7] max-[560px]:text-lg">
                {caseStudy.h1 || caseStudy.headline}
              </h1>

              <p className="mb-5 text-[15px] text-[#a6adb3] max-[560px]:text-[13.5px]">
                {caseStudy.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {caseStudy.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-[7px] border border-[rgba(255,255,255,0.07)] bg-white/5 px-3 py-1.5 text-xs text-[#a6adb3]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 gap-5 px-[18px] pb-6 pt-5 sm:grid-cols-2 sm:gap-8 sm:px-10 sm:pb-10 sm:pt-8">
              <div className="sm:col-span-2">
                <SectionLabel>The Challenge</SectionLabel>
                <p className="text-[13.5px] leading-[1.7] text-[#a6adb3] sm:text-[14.5px]">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="sm:col-span-2">
                <SectionLabel>What We Built</SectionLabel>
                <p className="text-[13.5px] leading-[1.7] text-[#a6adb3] sm:text-[14.5px]">
                  {caseStudy.built}
                </p>
              </div>

              <div>
                <SectionLabel>Key Deliverables</SectionLabel>
                <ul className="flex flex-col gap-2.5">
                  {caseStudy.deliverables.map(([title, desc]) => (
                    <li
                      key={title}
                      className="flex gap-2.5 rounded-[10px] border border-[rgba(255,255,255,0.07)] bg-[#11181d] p-3 text-[13px] text-[#a6adb3] transition-colors duration-200 hover:border-[#ec1a8d]/30 sm:text-sm"
                    >
                      <span className="mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-[#ec1a8d]/15 text-[10px] font-bold text-[#ff3aa0]">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#f5f6f7]">{title}</strong>: {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionLabel>Results</SectionLabel>
                <div className="grid grid-cols-1 gap-2.5">
                  {caseStudy.results.map((r) => (
                    <div
                      key={r}
                      className="flex items-start gap-2.5 rounded-xl border border-[#ec1a8d]/20 bg-gradient-to-br from-[#ec1a8d]/[0.08] to-[#ec1a8d]/[0.02] p-3.5 text-[13.5px] text-[#a6adb3]"
                    >
                      <span className="mt-0.5 flex-none text-base text-[#ff3aa0]">✅</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="mt-4 rounded-r-xl border-l-[3px] border-[#ec1a8d] bg-[#11181d] px-5 py-4 text-[15px] italic text-[#f5f6f7]">
                  "{caseStudy.quote}"
                </blockquote>
              </div>
            </div>

            {/* CTA footer */}
            <div className="flex flex-col items-start gap-3.5 border-t border-[rgba(255,255,255,0.07)] p-[18px] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6">
              <p className="text-[13px] text-[#a6adb3] sm:text-sm">
                Interested in a similar solution for your business?
              </p>
              <div className="flex w-full flex-wrap gap-3 sm:w-auto">
                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-[7px] rounded-[10px] border border-[rgba(255,255,255,0.07)] px-[18px] py-2.5 text-[13px] font-medium text-[#a6adb3] transition-colors duration-200 hover:border-[#ec1a8d]/35 hover:text-white sm:text-[13.5px]"
                >
                  🔗 View Live Project
                </a>
                <a
                  href = "/contact"
                  className="w-full rounded-full bg-[#ec1a8d] px-5 py-2.5 text-sm font-semibold text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(236,26,141,0.4)] sm:w-auto"
                >
                  Start My Project →
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-3.5 text-[11.5px] font-bold uppercase tracking-wider text-[#6b7278]">
      {children}
    </div>
  );
}