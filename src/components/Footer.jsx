import Container from "./Container";

const A = "https://apps.pexio.app/assets";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
  { label: "Terms & Condtions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <Container>
        <div className="flex flex-col items-center pt-[40px] text-center md:pt-[48px]">
          <img
            src={`${A}/Brand%20Logo%20Area.png`}
            alt="Pexio AB Testing"
            className="h-auto w-[110px] object-contain md:w-[130px]"
          />

          <p className="mt-[20px] text-[14px] sm:text-[16px] leading-[23px] text-[#6B6580]">
            Smarter experimentation for ambitious Shopify teams.
          </p>

          <nav className="mt-[20px] flex flex-wrap items-center justify-around sm:justify-center gap-x-[32px] gap-y-[10px] pb-[22px]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14px] sm:text-[18px] text-[#1A1523] transition hover:text-[#703CE1]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#ECEAF3] py-[18px] text-center">
          <p className="text-[11px] sm:text-[14px] text-[#6B6580]">
            © 2026 Cart Plus. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
