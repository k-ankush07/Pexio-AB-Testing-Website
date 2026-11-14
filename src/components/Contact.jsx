import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";

const A = "https://apps.pexio.app/assets";

const topics = ["General question", "Support", "Feature request"];

const inputBase =
  "w-full rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] px-[14px] text-[12px] text-[#1A1523] placeholder:text-[#A8A4B8] outline-none transition focus:border-[#703CE1] focus:bg-white";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timer = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:8001/api/contact/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full bg-white">
      <Container>
        <div className="py-[40px] md:py-[60px] lg:py-[80px]">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-[8px]">
              <span className="h-px w-[16px] bg-[#703CE1]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#703CE1]">
                Contact
              </span>
            </div>

            <h2 className="mt-[10px] text-[30px] leading-[38px] font-bold tracking-[-0.02em] text-[#1A1523] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[62px]">
              Let’s build your next
              <br />
              <span className="text-[#703CE1]">winning experiment.</span>
            </h2>

            {/* <p className="mt-[10px] text-[14px] leading-[22px] text-[#6B6580] md:text-[16px] md:leading-[24px]">
              Have a product question or need a hand getting started? Our team
              is here to help.
            </p> */}
          </div>

          {/* Cards */}
          <div className="mx-auto mt-[30px] grid max-w-[1100px] grid-cols-1 gap-[20px] md:mt-[40px] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            {/* Left card */}
            <div className=" hidden md:flex min-w-0 flex-col rounded-[18px] border border-[#E2E8F0]  p-[24px] md:p-[30px]">
              <img
                src={`${A}/Brand%20Logo%20Area.png`}
                alt="Pexio AB Testing"
                className="h-auto w-[130px] object-contain"
              />

              <h3 className="mt-[40px] text-[28px] leading-[42px] font-semibold tracking-[-0.01em] text-[#1A1523]">
                Chat with Us
              </h3>
              {/* <p className="mt-[12px] text-[12px] leading-[20px] text-[#6B6580]">
                No ticket maze. Get thoughtful guidance from a team that
                understands Shopify experimentation.
              </p> */}

              <div className="mt-[28px] flex flex-col gap-[14px]">
                <div className="flex items-center gap-[12px]">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#EBE8FD]">
                    <img
                      src={`${A}/message.svg`}
                      alt=""
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6580]">
                      Email us
                    </p>
                    <p className="truncate text-[12px] font-semibold text-[#1A1523]">
                      ab-support@pexio.app
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[12px]">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#EBE8FD]">
                    <img
                      src={`${A}/clock.svg`}
                      alt=""
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6580]">
                      Support hours
                    </p>
                    <p className="text-[12px] font-semibold text-[#1A1523]">
                      Mon-Fri, 9 AM–6 PM PST
                    </p>
                  </div>
                </div>
              </div>

              {/* Shopify badge */}
              <div className="mt-auto pt-[28px]">
                <div className="flex items-center gap-[12px] rounded-[12px] border-0 bg-[#F8FAFC] p-[14px]">
                  <img
                    src={`${A}/Shopify-logo.svg`}
                    alt="Shopify"
                    className="h-[28px] w-[28px] shrink-0 object-contain"
                  />
                  <div>
                    <p className="text-[12px] leading-[16px] font-semibold text-[#1A1523]">
                      Built exclusively for Shopify
                    </p>
                    <p className="text-[10px] leading-[14px] text-[#8A8698]">
                      Available in the Shopify App Store
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right card: form */}
            <form
              onSubmit={onSubmit}
              className="flex min-w-0 flex-col rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-[24px] md:p-[32px]"
            >
              <div className="flex items-center gap-[12px]">
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#EBE8FD]">
                  <img
                    src={`${A}/email.svg`}
                    alt=""
                    className="h-[18px] w-[18px]"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] sm:text-[20px] leading-[22px] font-semibold text-[#1A1523]">
                    Send us a message
                  </h3>
                  <p className="text-[10px] leading-[14px] text-[#8A8698]">
                    We usually reply within one business day.
                  </p>
                </div>
              </div>

              <div className="mt-[24px] grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                <label className="flex flex-col gap-[6px]">
                  <span className="text-[10px] font-semibold text-[#6B6580]">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    required
                    className={`${inputBase} h-[46px]`}
                  />
                </label>

                <label className="flex flex-col gap-[6px]">
                  <span className="text-[10px] font-semibold text-[#6B6580]">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    required
                    className={`${inputBase} h-[46px]`}
                  />
                </label>
              </div>

              <label className="mt-[16px] flex flex-col gap-[6px]">
                <span className="text-[10px] font-semibold text-[#6B6580]">
                  Subject
                </span>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  required
                  className={`${inputBase} h-[46px] cursor-pointer ${
                    form.subject ? "" : "text-[#A8A4B8]"
                  }`}
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {topics.map((t) => (
                    <option key={t} value={t} className="text-[#6B6580]">
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-[16px] flex flex-col gap-[6px]">
                <span className="text-[10px] font-semibold text-[#6B6580]">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className={`${inputBase} resize-none py-[12px]`}
                />
              </label>

              <Button
                type="submit"
                className="mt-[16px]"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="mt-[12px] text-[12px] font-semibold text-green-600">
                  Thanks! Your message has been sent. We'll reply within one
                  business day.
                </p>
              )}
              {status === "error" && (
                <p className="mt-[12px] text-[12px] font-semibold text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
