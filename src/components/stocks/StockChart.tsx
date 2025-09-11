"use client";
import { BellRing, CirclePlus } from "lucide-react";
import React, { useState } from "react";
import {
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

// Mock chart data for LAB stock
const chartData = [
  { time: "09:30", price: 1.05 },
  { time: "10:00", price: 1.12 },
  { time: "10:30", price: 1.248 },
  { time: "11:00", price: 1.2 },
  { time: "11:30", price: 1.25 },
  { time: "12:00", price: 1.22 },
  { time: "12:30", price: 1.28 },
  { time: "13:00", price: 1.26 },
  { time: "13:30", price: 1.3 },
  { time: "14:00", price: 1.28 },
  { time: "14:30", price: 1.32 },
  { time: "15:00", price: 1.35 },
  { time: "15:30", price: 1.33 },
  { time: "16:00", price: 1.38 },
];

type TimePeriod = "1D" | "1W" | "1M" | "3M" | "6M" | "1Y" | "5Y" | "ALL";

const timePeriods: TimePeriod[] = [
  "1D",
  "1W",
  "1M",
  "3M",
  "6M",
  "1Y",
  "5Y",
  "ALL",
];

interface StockData {
  symbol: string;
  companyName: string;
  currentPrice: number;
  changePercent: number;
  changeAmount: number;
  volume: string;
  todayRange: {
    low: number;
    high: number;
  };
}

const stockData: StockData = {
  symbol: "LAB",
  companyName: "Standard BioTools Inc.",
  currentPrice: 19381.0,
  changePercent: 17.22,
  changeAmount: 10.18,
  volume: "2.1M",
  todayRange: {
    low: 1.06,
    high: 1.28,
  },
};

const StockChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("1D");

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg">
          <p className="font-semibold">${payload[0].value}</p>
          <p className="text-sm text-gray-600">10:34am</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-8  border border-gray-100">
      {/* Header */}
      <div className="flex items-start justify-between ">
        <div className="flex flex-col w-full items-start ">
          <div className="flex flex-col gap-1 ">
            <h1 className="text-2xl font-medium text-[#090A0B]">
              {stockData.symbol}
            </h1>

            <p className="text-[#383D41]  text-xs">{stockData.companyName}</p>
          </div>
          <div className="mb-4 text-[#383D41]">
            <div className="text-[32px] font-bold  mb-2">
              ${stockData.currentPrice.toLocaleString()}
            </div>
            <div className="flex items-center gap-2 text-sm  ">
              <span className="flex items-center gap-1 font-medium  text-[#2EB200]">
                <span>▲</span>
                {stockData.changePercent}%
              </span>
              <span>+${stockData.changeAmount}</span>
              <span>Today</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 *:cursor-pointer">
          <CirclePlus
            role="button"
            aria-label="Add to watchlist"
            className="text-[#2D3339] p-2 h-8 w-8 border rounded-full border-[#E8EBED] hover:text-gray-900"
          />
          <BellRing
            role="button"
            aria-label="Set alert"
            className="text-[#2D3339] p-2 h-8 w-8 border rounded-full border-[#E8EBED] hover:text-gray-900"
          />
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="flex gap-[4px] justify-evenly bg-[#F7FAFD] p-1 mb-8 rounded-full">
        {timePeriods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`font-medium text-[11px] p-2 rounded-full w-[89px] cursor-pointer transition ${
              selectedPeriod === period
                ? "text-[#2EB200] bg-white"
                : "text-[#667085] hover:text-gray-600"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-64 mb-6 ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="price"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#colorGreen)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#22c55e",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />
            <Tooltip content={<CustomTooltip />} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-8 ">
        <div className="border border-[#E9EAEB] rounded-[16px] py-3 px-4">
          <p className="text-[#60707A] text-xs mb-1">Today's Range</p>
          <p className="text-sm font-semibold text-[#090A0B]">
            ${stockData.todayRange.low} - ${stockData.todayRange.high}
          </p>
        </div>
        <div className="border border-[#E9EAEB] rounded-[16px] py-3 px-4">
          <p className="text-[#60707A] text-xs mb-1">Volume</p>
          <p className="text-sm font-semibold text-[#090A0B]">
            {stockData.volume}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockChart;
