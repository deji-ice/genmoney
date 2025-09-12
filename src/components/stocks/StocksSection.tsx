"use client";
import React, { useState, useMemo } from "react";
import { Stock, StockCategory, stocks } from "../../data/stocks";
import { Activity, TrendingDown, TrendingUp } from "lucide-react";
import StockRow from "./StockRow";
import Header from "../common/Header";
import clsx from "clsx";

const TabButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={clsx(
      "flex items-center gap-2 py-2.5 px-3 lg:px-4 rounded-full border h-[40px] lg:h-[36px] whitespace-nowrap cursor-pointer transition text-sm bg-[#F2F4F7] font-semibold",
      active
        ? "border-[#3C00FF] text-[#3C00FF]"
        : "border-transparent text-[#60707A]"
    )}
  >
    {children}
  </button>
);

const tabConfig: {
  key: StockCategory;
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "gainers", label: "Gainers", icon: <TrendingUp /> },
  { key: "losers", label: "Losers", icon: <TrendingDown /> },
  { key: "most", label: "Most Traded", icon: <Activity /> },
];

const StocksSection = () => {
  const [activeTab, setActiveTab] = useState<StockCategory>("gainers");
  const [stockData, setStockData] = useState<Stock[]>(stocks);

  return (
    <section className="bg-white w-full  font-family-open-sauce">
      <Header title="Stocks" />
      <div className="flex gap-2 lg:gap-4  mb-6">
        {tabConfig.map((t) => (
          <TabButton
            key={t.key}
            active={activeTab === t.key}
            onClick={() => setActiveTab(t.key)}
          >
            <span className="*:h-4 *:w-4">{t.icon}</span>
            {t.label}
          </TabButton>
        ))}
      </div>

      <div className=" overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[#717680] font-semibold sr-only md:not-sr-only">
              <th className="text-left font-medium py-3 pr-4">Symbol</th>
              <th className="text-left font-medium py-3 pr-4">Name</th>
              <th className="text-left font-medium py-3 pr-4">Price</th>
              <th className="text-left font-medium py-3 pr-4">%Change</th>
              <th className="w-12 font-medium py-3 pr-2">
                <span className="sr-only">Alert</span>
              </th>
              <th className="w-12 font-medium py-3 pr-2">
                <span className="sr-only">Add</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((s) => (
              <StockRow key={s.id} stock={s} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StocksSection;
