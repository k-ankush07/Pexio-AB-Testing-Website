import Container from "./Container";
import Button from "./Button";

const HERO_IMG =
  "https://apps.pexio.app/assets/Pexio-Experiment-Dashboard%203.svg";
const TICK = "https://apps.pexio.app/assets/charm_circle-tick.svg";

const points = ["No-code setup", "No credit card", "Built for Shopify"];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Container className="relative">
        <div className="flex flex-col items-center gap-[30px] pt-[30px] md:pt-[60px] lg:flex-row  lg:py-[90px]">
          <div className="relative z-10 w-full lg:w-[50%] lg:shrink-0">
            <h1 className="text-[36px] leading-[44px] font-extrabold tracking-[-0.02em] text-[#1A1523] md:text-[48px] md:leading-[58px] lg:text-[66px] lg:leading-[75px]">
              Every Test. A Smarter way to{" "}
              <span className="relative inline-block text-[#703CE1]">
                Grow.
                <img
                  src="https://apps.pexio.app/assets/Vector.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 -bottom-[4px] h-auto w-full select-none md:-bottom-[6px]"
                />
              </span>
            </h1>

            <p className="mt-5 max-w-[520px] text-[15px] leading-[26px] text-[#5B5668] md:text-[16px]">
              Run focused A/B tests, understand what drives conversion, and turn
              every decision into measurable Shopify growth.
            </p>

            <Button href="/app" className="mt-[20px] w-full md:w-auto">
              Start Experiments
            </Button>

            <ul className="mt-[20px] flex flex-wrap items-center gap-x-5 gap-y-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-[6px] text-[12px] leading-[16px] text-[#5B5668]"
                >
                  <img
                    src={TICK}
                    alt=""
                    width={20}
                    height={20}
                    className="h-[20px] w-[20px]"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[52%] lg:shrink-0 lg:ml-[70px]">
            <img
              src={HERO_IMG}
              alt="Pexio dashboard preview"
              className="h-auto w-full max-w-none object-contain lg:w-[100%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
