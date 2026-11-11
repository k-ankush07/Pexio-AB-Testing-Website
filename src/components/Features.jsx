import Container from "./Container";

const A = "https://apps.pexio.app/assets";

const items = [
  {
    icon: `${A}/content-img.svg`,
    image: `${A}/content-feature.svg`,
    title: "Content Edit",
    desc: "Test headlines, copy, calls to action, and product messaging without touching theme code.",
  },
  {
    icon: `${A}/templete-img.svg`,
    image: `${A}/templete-feature.svg`,
    title: "Template Experiment",
    desc: "Compare complete page structures to find the journey that converts with confidence.",
  },
  {
    icon: `${A}/theme-img.svg`,
    image: `${A}/theme-feature.svg`,
    title: "Theme Comparison",
    desc: "Run controlled tests across Shopify themes before committing to a redesign.",
  },
  {
    icon: `${A}/split-img.svg`,
    image: `${A}/split-feature.svg`,
    title: "Split URL",
    desc: "Route traffic between experiences and measure performance across distinct URLs.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-white">
      <Container>
        <div className="py-[40px] md:py-[60px] lg:py-[80px]">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-[8px]">
              <span className="h-px w-[16px] bg-[#703CE1]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#703CE1]">
                Powerful Features
              </span>
            </div>

            <h2 className="mt-[10px] text-[30px] leading-[38px] font-bold tracking-[-0.02em] text-[#1A1523] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[62px]">
              One toolkit. Every path to a{" "}
              <span className="text-[#703CE1]">better storefront.</span>
            </h2>

            <p className="mt-[10px]  text-[14px] leading-[22px] text-[#6B6580] md:text-[16px] md:leading-[24px]">
              Flexible testing tools built to improve content, templates,
              themes, and customer journeys.
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-[20px] grid max-w-[1200px] max-[430px]:grid-cols-1 gap-[10px] md:mt-[40px] grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex min-w-0 flex-col gap-[20px] rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-[15px] lg:p-[40px] sm:min-h-[220px] md:flex-row sm:items-center sm:justify-between sm:gap-[16px]"
              >
                {/* Left: icon + text */}
                <div className="min-w-0 md:w-[48%] sm:shrink-0">
                  <div className="flex h-[36px] w-[36px] sm:h-[46px] sm:w-[46px] items-center justify-center rounded-[9px] sm:rounded-[10px] bg-[#EBE8FD]">
                    <img
                      src={item.icon}
                      alt=""
                      className="h-[18px] w-[18px] sm:h-[23px] sm:w-[23px]"
                    />
                  </div>
                  <h3 className="mt-[10px] sm:mt-[14px] text-[14px] sm:text-[24px] sm:leading-[28px] font-semibold tracking-[-0.01em] text-[#1A1523]">
                    {item.title}
                  </h3>
                  <p className="mt-[10px] text-[10px] sm:text-[12px] leading-[18px] text-[#6B6580]">
                    {item.desc}
                  </p>
                </div>

                {/* Right: illustration */}
                <div className="flex min-w-0 flex-1 items-center justify-center md:justify-end">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto max-h-[140px] w-full max-w-[250px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}