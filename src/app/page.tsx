import ETFsSection from "@/components/ETFs/ETFsSection";
import IndicesSection from "@/components/indices/IndicesSection";
import StocksSection from "@/components/stocks/StocksSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-20 pt-10 flex ">
      <section className="flex-3 flex flex-col">
        <StocksSection />
        <ETFsSection />
        <IndicesSection/>
      </section>
      <section className="flex-2"></section>
    </div>
  );
}
