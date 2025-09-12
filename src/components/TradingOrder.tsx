"use client";
import React, { useState } from "react";

interface TradingData {
  symbol: string;
  companyName: string;
  currentPrice: number;
  changePercent: number;
  buyingPower: number;
}

const tradingData: TradingData = {
  symbol: "LAB",
  companyName: "Standard BioTools Inc.",
  currentPrice: 19381.46,
  changePercent: 17.22,
  buyingPower: 10520.0,
};

type OrderTab = "Buy" | "Sell";
type OrderType = "Market order" | "Limit order" | "Stop order";
type ValidUntil = "Day" | "Good Till Canceled" | "Immediate or Cancel";

const TradingOrder = () => {
  const [activeTab, setActiveTab] = useState<OrderTab>("Buy");
  const [orderAmount, setOrderAmount] = useState<string>("0.00");
  const [orderType, setOrderType] = useState<OrderType>("Market order");
  const [validUntil, setValidUntil] = useState<ValidUntil>("Day");

  return (
    <div className="bg-white rounded-2xl  border  border-gray-100 max-w-md">
      {/* Buy/Sell Tabs */}
      <div className="flex  px-6  py-5 border-b border-b-[#E8EBED]">
        <button
          onClick={() => setActiveTab("Buy")}
          className={`flex-1 py-3 px-6 rounded-full cursor-pointer text-sm bg-[#F2F4F7] font-medium transition ${
            activeTab === "Buy"
              ? "text-[#3C00FF] border-2 border-[#3C00FF]"
              : " text-[#A7B3B9]"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab("Sell")}
          className={`flex-1 py-3 px-6 rounded-full cursor-pointer text-sm bg-[#F2F4F7] font-medium transition ml-2 ${
            activeTab === "Sell"
              ? " text-[#3C00FF] border-2 border-[#3C00FF]"
              : " text-[#A7B3B9]"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Stock Info */}
      <div className=" px-6  pt-5 pb-2 border-b border-b-[#E8EBED]">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold mb-1 text-[#090A0B]">
              {tradingData.symbol}
            </h3>
            <p className="text-[#60707A] text-sm">{tradingData.companyName}</p>
          </div>
          <div className="text-right ">
            <p className="text-sm font-bold mb-1 text-[#383D41]">
              ${tradingData.currentPrice.toLocaleString()}
            </p>
            <p className="text-[#2EB200] text-sm font-medium">
              ▲ {tradingData.changePercent}%
            </p>
          </div>
        </div>
      </div>

      {/* Amount Input */}
      <div className=" px-6  pb-6 pt-7   border-b border-b-[#E8EBED]">
        <div className="flex items-center w-fit rounded-full p-0.5 pl-2 gap-1.5 justify-center mb-4 bg-[#ECEFF4] mx-auto">
          <span className="text-xs text-[#090A0B] font-medium"> Dollars</span>
          <button className="bg-white text-[#3C00FF] shadow-xs p-1 text-xs flex flex-col items-center justify-center w-[27px] h-[27px] rounded-full font-medium">
            $
          </button>
        </div>

        <div className="text-center mb-4">
          <input
            type="text"
            value={`$${orderAmount}`}
            onChange={(e) => setOrderAmount(e.target.value.replace("$", ""))}
            className="text-[40px] text-[#A7B3B9] bg-transparent border-none outline-none text-center w-full"
            placeholder="$0.00"
          />
        </div>

        <div className="flex items-center justify-center text-sm text-[#60707A]">
          <span>Buying Power: ${tradingData.buyingPower.toLocaleString()}</span>
          <span className="ml-2">›</span>
        </div>
      </div>

      {/* Order Options */}
      <div className="space-y-4 px-6 py-5 mb-6 border-b border-b-[#E8EBED]">
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#383D41]">Order Type</span>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value as OrderType)}
            className="bg-white border border-gray-200  rounded-lg w-[175px] px-3 py-2 text-[#090A0B]"
          >
            <option value="Market order">Market order</option>
          </select>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-[#383D41]">Valid until</span>
          <select
            value={validUntil}
            onChange={(e) => setValidUntil(e.target.value as ValidUntil)}
            className="bg-white border border-gray-200 w-[175px] rounded-lg px-3 py-2 text-[#090A0B]"
          >
            <option value="Day"> </option>
          </select>
        </div>
      </div>

      {/* Review Button */}
      <button className="w-full bg-[#D8CCFF] mb-5 cursor-pointer ml-6 max-w-[406px] text-white py-4 px-10 rounded-full font-medium text-lg hover:bg-purple-400 transition">
        Review {activeTab} Order
      </button>
    </div>
  );
};

export default TradingOrder;
