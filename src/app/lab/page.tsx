import CompanyProfile from "@/components/CompanyProfile";
import Holdings from "@/components/Holdings";
import Statistics from "@/components/Statistics";
import StockChart from "@/components/stocks/StockChart";
import TradingOrder from "@/components/TradingOrder";
import React from "react";

const LabPage = () => {
  return (
    <div className=" px-8 py-4 lg:px-20 lg:py-10 flex flex-col lg:flex-row gap-8">
      <section className="flex-3 flex flex-col space-y-10.5">
        <StockChart />
        <Holdings />
        <CompanyProfile />
        <Statistics />
      </section>
      <section className="flex-2 flex flex-col">
        <TradingOrder />
      </section>
    </div>
  );
};

export default LabPage;
``;
