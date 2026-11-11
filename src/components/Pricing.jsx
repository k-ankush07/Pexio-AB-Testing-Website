import Container from "./Container";

const A = "https://apps.pexio.app/assets";

const plans = [
  {
    key: "free",
    icon: `${A}/free.svg`,
    tag: "Free",
    name: "Start experimenting",
    price: "$0",
    unit: "forever",
    desc: "For teams validating their first ideas with focused experiments.",
    cta: "Start for free",
    href: "#",
    listTitle: "What's included",
    features: [
      "Core testing features",
      "Basic experimentation",
      "Essential analytics",
      "Shopify integration",
    ],
    featured: false,
  },
  {
    key: "pro",
    icon: `${A}/pro.svg`,
    tag: "Pro",
    name: "Scale with confidence",
    price: "$9.99",
    unit: "/ month",
    desc: "For growing stores ready to run a continuous optimization program.",
    cta: "Upgrade to Pro",
    href: "#",
    listTitle: "Everything you need to scale",
    features: [
      "Everything in Free",
      "Advanced audience targeting",
      "Unlimited experiments",
      "Priority performance insights",
    ],
    featured: true,
  },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#F8FAFC]">
      <Container>
        <div className="py-[40px] md:py-[60px] lg:py-[80px]">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-[8px]">
              <span className="h-px w-[16px] bg-[#703CE1]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#703CE1]">
                Simple Pricing
              </span>
            </div>

            <h2 className="mt-[10px] text-[30px] leading-[38px] font-bold tracking-[-0.02em] text-[#1A1523] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[62px]">
              Start free. Upgrade
              <br />
              <span className="text-[#703CE1]">when growth demands it.</span>
            </h2>

            <p className="mt-[10px] max-w-[620px] text-[14px] leading-[22px] text-[#6B6580] md:text-[16px] md:leading-[24px]">
              No setup fees, no complicated tiers, and no long-term commitment.
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-[20px] grid max-w-[1000px] grid-cols-1 gap-[20px] md:mt-[40px] md:grid-cols-2">
            {plans.map((p) => {
              const f = p.featured;
              return (
                <div
                  key={p.key}
                  className={`flex min-w-0 flex-col rounded-[18px] p-[24px] md:p-[30px] ${
                    f
                      ? "bg-[#703CE1] text-white shadow-[0_20px_50px_rgba(112,60,225,0.3)]"
                      : "border border-[#E2E8F0] bg-white text-[#1A1523]"
                  }`}
                >
                  {/* Top row: mobile = badge upar, desktop = badge right side */}
                  <div className="flex flex-col items-start gap-[26px] md:flex-row md:items-center md:justify-between md:gap-[12px]">
                    {f && (
                      <span className="order-first shrink-0 rounded-full bg-white px-[12px] py-[6px] text-[10px] font-bold uppercase tracking-[0.08em] text-[#703CE1] md:order-last">
                        Most popular
                      </span>
                    )}

                    <div className="flex items-center gap-[16px]">
                      <div
                        className={`flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-[10px] ${
                          f ? "bg-[#F3EFFF]" : "bg-[#EBE8FD]"
                        }`}
                      >
                        <img
                          src={p.icon}
                          alt=""
                          width={22}
                          height={22}
                          className="block h-[22px] w-[22px] object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`text-[10px] leading-[14px] font-semibold uppercase tracking-[0.15em] ${
                            f ? "text-white/80" : "text-[#6B6580]"
                          }`}
                        >
                          {p.tag}
                        </p>
                        <p className="mt-[2px] text-[16px] leading-[22px] font-semibold md:text-[18px]">
                          {p.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-[20px] sm:mt-[32px] flex items-end gap-[10px]">
                    <span className="text-[50px] leading-[48px] font-bold tracking-[-0.03em] md:text-[54px] md:leading-[60px]">
                      {p.price}
                    </span>
                    <span
                      className={`mb-[8px] text-[12px] ${
                        f ? "text-white/80" : "text-[#6B6580]"
                      }`}
                    >
                      {p.unit}
                    </span>
                  </div>

                  <p
                    className={`mt-[20px] sm:mt-[32px] text-[12px] leading-[22px] ${
                      f ? "text-white/90" : "text-[#6B6580]"
                    }`}
                  >
                    {p.desc}
                  </p>

                  {/* CTA */}
                  <a
                    href={p.href}
                    className={`mt-[20px] sm:mt-[32px] flex h-[50px] w-full items-center justify-center gap-[8px] rounded-[8px] text-[14px] font-semibold transition ${
                      f
                        ? "bg-white text-[#703CE1] hover:bg-[#F3EFFF]"
                        : "border border-[#E2E8F0] bg-[#ffffff] text-[#1A1523] hover:bg-[#F1F5F9]"
                    }`}
                  >
                    {p.cta}
                    <Arrow />
                  </a>

                  {/* Divider */}
                  <div
                    className={`my-[20px] sm:my-[32px] h-px w-full ${
                      f ? "bg-white/25" : "bg-[#E2E8F0]"
                    }`}
                  />

                  {/* Features */}
                  <p
                    className={`text-[9px] font-semibold uppercase tracking-[0.15em] ${
                      f ? "text-white/80" : "text-[#6B6580]"
                    }`}
                  >
                    {p.listTitle}
                  </p>

                  <ul className="mt-[20px] sm:mt-[32px] flex flex-col gap-[14px]">
                    {p.features.map((item) => (
                      <li key={item} className="flex items-center gap-[14px]">
                        <span
                          className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${
                            f ? "bg-white" : "bg-[#EBE8FD]"
                          }`}
                        >
                          <img
                            src={`${A}/check.svg`}
                            alt=""
                            width={10}
                            height={10}
                            className="h-[10px] w-[10px]"
                          />
                        </span>
                        <span
                          className={`text-[12px] leading-[20px] ${
                            f ? "text-white" : "text-[#6B6580]"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}