import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyPexio from "../components/WhyPexio";
import Features from "../components/Features";
export default function Home() {
  return (
    <>
      <div className="bg-[linear-gradient(270deg,#FFFFFF_29.22%,#D1C1F5_115.33%,#703CE1_148.7%)]">
        <Navbar />
        <Hero />
      </div>
      <main>
        <WhyPexio />
        <Features />
      </main>
    </>
  );
}
