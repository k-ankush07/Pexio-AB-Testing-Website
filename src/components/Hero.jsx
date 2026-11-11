import Container from "./Container";
import Button from "./Button";

const HERO_IMG = "https://apps.pexio.app/assets/Mask%20group.svg";
const TICK = "https://apps.pexio.app/assets/charm_circle-tick.svg";

const points = ["No-code setup", "No credit card", "Built for Shopify"];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Right image: Container se bahar, screen ke right edge tak (sirf desktop) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center justify-end lg:flex">
        <img
          src={HERO_IMG}
          alt="Pexio dashboard preview"
          className="h-auto w-full max-w-none object-contain object-right"
        />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-[30px] py-[30px] md:py-[60px] lg:min-h-[640px] lg:justify-center lg:py-[90px]">
          {/* Left content */}
          <div className="relative z-10 w-full lg:max-w-[560px]">
            <h1 className="text-[36px] leading-[44px] font-extrabold tracking-[-0.02em] text-[#1A1523] md:text-[48px] md:leading-[58px] lg:text-[56px] lg:leading-[66px]">
              Every Test. A Smarter way to{" "}
              <span className="text-[#703CE1] underline decoration-[#703CE1] decoration-[3px] underline-offset-[6px]">
                Grow.
              </span>
            </h1>

            <p className="mt-5 max-w-[520px] text-[15px] leading-[26px] text-[#5B5668] md:text-[16px]">
              Run focused A/B tests, understand what drives conversion, and turn
              every decision into measurable Shopify growth.
            </p>

            <Button href="/app" className="mt-8 w-full md:w-auto">
              Start Experiments
            </Button>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-[6px] text-[12px] leading-[16px] text-[#5B5668]"
                >
                  <img src={TICK} alt="" width={16} height={16} className="h-4 w-4" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile/tablet image: normal flow me neeche */}
          <img
            src={HERO_IMG}
            alt="Pexio dashboard preview"
            className="h-auto w-full object-contain lg:hidden"
          />
        </div>
      </Container>
    </section>
  );
}