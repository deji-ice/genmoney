import StocksSection from "@/components/stocks/StocksSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-20 pt-10 flex ">
      <section className="flex-3">
        <StocksSection/>
      </section>
      <section className="flex-2"></section>
    </div>
  );
}
