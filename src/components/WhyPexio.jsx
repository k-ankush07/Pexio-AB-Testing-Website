import Container from "./Container";
import Button from "./Button";

const A = "https://apps.pexio.app/assets";

const features = [
  {
    icon: `${A}/Icon.svg`,
    title: "A/B Testing",
    desc: "Launch focused experiments without slowing down your storefront.",
  },
  {
    icon: `${A}/Icon%20(1).svg`,
    title: "Clear Analytics",
    desc: "See what changed, why it matters, and what to do next.",
  },
  {
    icon: `${A}/Icon%20(2).svg`,
    title: "Smart Audiences",
    desc: "Deliver relevant variants to the visitors who matter most.",
  },
  {
    icon: `${A}/Icon%20(3).svg`,
    title: "Faster Optimization",
    desc: "Turn every insight into a stronger customer experience.",
  },
];

export default function WhyPexio() {
  return (
    <section id="why-pexio" className="w-full bg-[#F8FAFC]">
      <Container>
        <div className="grid grid-cols-1 gap-[20px] py-[40px] md:py-[60px] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-[40px] lg:py-[80px]">
          {/* Left content */}
          <div className="min-w-0">
            <div className="flex items-center gap-[8px]">
              <span className="h-px w-[22px] bg-[#703CE1]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#703CE1]">
                Why Pexio
              </span>
            </div>

            <h2 className="mt-[10px] text-[30px] leading-[40px] font-bold tracking-[-0.02em] text-[#1A1523] md:text-[40px] md:leading-[50px] lg:text-[34px] lg:leading-[44px] xl:text-[42px] xl:leading-[52px]">
              Stop guessing.
              <br />
              Start growing <span className="text-[#703CE1]">with data.</span>
            </h2>

            <p className="mt-[20px] max-w-[540px] text-[14px] sm:text-[16px] leading-[24px] text-[#6B6580]">
              Pexio gives Shopify teams a disciplined way to test ideas,
              understand customer behavior, and improve every part of the buying
              experience.
            </p>

            {/* <Button href="#features" className="mt-[20px] sm:mt-[30px] w-full md:w-auto">
              Discover the Platform
            </Button> */}
          </div>

          {/* Right: cards */}
          <div className="grid min-w-0 grid-cols-1 gap-[12px] md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
            {/* 2x2 feature cards */}
            <div className="grid grid-cols-2 gap-[12px] max-[430px]:grid-cols-1">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-[10px] border border-[#E2E8F0] bg-white p-[20px]"
                >
                  <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[10px] bg-[#EBE8FD]">
                    <img
                      src={f.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px]"
                    />
                  </div>
                  <h3 className="mt-[10px] text-[15px] leading-[22px] font-semibold text-[#1A1523]">
                    {f.title}
                  </h3>
                  <p className="mt-[6px] text-[12px] leading-[19px] text-[#6B6580]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Insight card */}
            <div className="flex min-w-0 flex-col justify-between overflow-hidden rounded-[10px] border border-[#ECEAF3] bg-white shadow-[0_8px_30px_rgba(112,60,225,0.08)]">
              <div className="p-[20px] pb-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#6B6580]">
                    Experiment insight
                  </span>
                  <span className="flex items-center gap-[4px] text-[9px] font-bold tracking-wide text-[#E1423C]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#E1423C]" />
                    LIVE
                  </span>
                </div>
                <p className="mt-[12px] text-[11px] text-[#6B6580]">
                  Conversion uplift
                </p>
                <p className="my-[10px] text-[32px] leading-[40px] font-bold text-[#05966A] xl:text-[40px]">
                  +12.8%
                </p>
                <p className="text-[9px] text-[#6B6580]">
                  Statistically significant
                </p>
              </div>

              <img
                src={`${A}/Frame%202121453050.svg`}
                alt="Conversion uplift chart"
                className="block h-auto w-full px-[20px] pb-[20px] pt-[12px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
