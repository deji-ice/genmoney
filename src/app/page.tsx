import CategorySection from "@/components/category/CategorySection";
import ClubSection from "@/components/club/ClubSection";
import ETFsSection from "@/components/ETFs/ETFsSection";
import IndicesSection from "@/components/indices/IndicesSection";
import NewsSection from "@/components/news/NewsSection";
import StocksSection from "@/components/stocks/StocksSection";


export default function Home() {
  return (
    <div className=" px-4 py-4 lg:px-20 lg:py-10 gap-8 flex flex-col lg:flex-row ">
      <section className="flex-3 flex flex-col">
        <StocksSection />
        <ETFsSection />
        <IndicesSection />
      </section>
      <section className="flex-2 flex flex-col">
        <CategorySection />
        <ClubSection />
        <NewsSection columns={1} maxItems={3} className="p-2 mt-8"/>
      </section>
    </div>
  );
}
