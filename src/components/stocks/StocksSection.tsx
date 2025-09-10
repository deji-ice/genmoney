"use client";
import React, { useState, useMemo } from "react";
import { stocks, filterStocks, StockCategory, Stock } from "../../data/stocks";
import {
  Activity,
  ArrowRight,
  BellRing,
  CirclePlus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import StockRow from "./StockRow";
import Header from "../common/Header";

const TabButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 py-2.5 px-4  rounded-full border transition text-sm bg-[#F2F4F7] font-semibold
      ${
        active
          ? "border-[#3C00FF] text-[#3C00FF] "
          : "border-transparent text-[#60707A] "
      }
    `}
  >
    {children}
  </button>
);

// Table row component

const tabConfig: {
  key: StockCategory;
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "gainers", label: "Gainers", icon: <TrendingUp /> },
  { key: "losers", label: "Losers", icon: <TrendingDown /> },
  { key: "most", label: "Most Traded", icon: <Activity /> },
];

const StocksSection= () => {
  const [activeTab, setActiveTab] = useState<StockCategory>("gainers");
  const data = useMemo(() => filterStocks(activeTab), [activeTab]);

  return (
    <section className="bg-white w-full  font-family-open-sauce">
      <Header title="Stocks" />
      <div className="flex gap-4 px-6 mb-6">
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

      <div className="px-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[#717680] font-semibold">
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
            {data.map((s) => (
              <StockRow key={s.id} stock={s} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StocksSection;
