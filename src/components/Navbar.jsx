import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";

const LOGO = "https://apps.pexio.app/assets/Brand%20Logo%20Area.png";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="relative z-50 w-full">
      <Container>
        <div className="flex items-center justify-between py-[20px] md:py-[30px]">
          {/* Logo */}
          <a href="/" className="shrink-0" aria-label="Pexio home">
            <img
              src={LOGO}
              alt="Pexio AB Testing"
              width={135}
              height={50}
              className="h-auto w-[110px] object-contain md:w-[135px]"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-[40px] md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[18px] leading-[20px] font-normal text-[#1A1523] transition-colors hover:text-[#703CE1]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop button */}
          <div className="hidden md:block">
            <Button href="/app">Start Experiments</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#1A1523] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#1A1A2E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile full-screen menu (hamesha mounted, sirf fade hota hai) */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex h-dvh flex-col bg-white transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Top bar: navbar jaisa exact padding */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-[20px] py-[20px]">
          <a href="/" onClick={() => setOpen(false)} aria-label="Pexio home">
            <img
              src={LOGO}
              alt="Pexio AB Testing"
              width={135}
              height={50}
              className="h-auto w-[110px] object-contain"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#703CE1]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Links (halka stagger) */}
        <nav className="flex flex-col">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={`border-b border-[#E2E8F0] px-[20px] py-[14px] text-[16px] text-[#1A1523] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Bottom button */}
        <div className="mt-auto px-[20px] pb-[20px]">
          <Button href="/app" className="w-full">
            Start Experiments
          </Button>
        </div>
      </div>
    </header>
  );
}