import { RightVector } from "@/assets/icons";
import CompanyProfile from "@/components/CompanyProfile";
import Holdings from "@/components/Holdings";
import NewsSection from "@/components/news/NewsSection";
import RelatedStocks from "@/components/RelatedStocks";
import Statistics from "@/components/Statistics";
import StockChart from "@/components/stocks/StockChart";
import TradingOrder from "@/components/TradingOrder";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LabPage = () => {
  return (
    <main className="px-4 py-4 lg:px-20 lg:py-10 flex flex-col gap-6 ">
      <Link
        href="/"
        aria-label="back button"
        role="button"
        className="flex gap-2.5 items-center cursor-pointer"
      >
        <Image
          src={RightVector}
          alt="Right Vector"
          className="rotate-180 h-[15px]  w-[18px] "
          height={15}
          width={18}
        />
        <h5 className="text-[#090A0B] font-medium text-[20px]">Back</h5>
      </Link>
      <div className="  flex flex-col lg:flex-row gap-8">
        <section className="flex-3 flex flex-col space-y-10.5">
          <StockChart />
          <div className="flex lg:hidden">
            <TradingOrder />
          </div>
          <Holdings />
          <CompanyProfile />
          <Statistics />
          <RelatedStocks />
          <NewsSection columns={2} maxItems={4} separator={true} />
        </section>
        <section className="flex-2 hidden lg:flex  flex-col ">
          <TradingOrder />
        </section>
      </div>
    </main>
  );
};

export default LabPage;
