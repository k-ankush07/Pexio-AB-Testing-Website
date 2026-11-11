import Container from "./Container";
import Button from "./Button";

const A = "https://apps.pexio.app/assets";

export default function CTA() {
  return (
    <section id="cta" className="w-full bg-white">
<div className="w-full bg-[linear-gradient(360deg,#FFFFFF_38.76%,#D1C1F5_119.97%,#703CE1_156.83%)] lg:bg-linear-to-r lg:from-white lg:via-[#F1EAFC] lg:to-[#D9C9F7]">        <Container>
          <div className="grid grid-cols-1 items-center gap-[30px] py-[40px] md:py-[60px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-[40px] lg:py-[80px]">
            {/* Left content */}
            <div className="min-w-0">
              <div className="flex items-center gap-[8px]">
                <span className="h-px w-[16px] bg-[#703CE1]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#703CE1]">
                  Ready to grow?
                </span>
              </div>

              <h2 className="mt-[10px] text-[30px] leading-[38px] font-bold tracking-[-0.02em] text-[#1A1523] md:text-[36px] md:leading-[46px] lg:text-[50px] lg:leading-[62px]">
                Your next winning
                <br />
                experiment <span className="text-[#703CE1]">Starts here.</span>
              </h2>

              <p className="mt-[10px] md:mt-[20px] max-w-[460px] text-[14px] sm:text-[16px] leading-[22px] text-[#6B6580]">
                Replace opinions with evidence and turn every storefront
                decision into opportunity to grow.
              </p>

              <Button href="#contact" className="mt-[20px] md:mt-[30px] w-full md:w-auto">
                Start Experiments
              </Button>
            </div>

            {/* Right illustration */}
            <div className="flex min-w-0 items-center justify-center lg:justify-end">
              <img
                src={`${A}/winning-experiment1.svg`}
                alt="Test different ideas, find what works, grow your revenue"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
