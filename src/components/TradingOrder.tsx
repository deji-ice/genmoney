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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-md">
      {/* Buy/Sell Tabs */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab("Buy")}
          className={`flex-1 py-3 px-6 rounded-full font-medium transition ${
            activeTab === "Buy"
              ? "bg-purple-100 text-purple-700 border-2 border-purple-300"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab("Sell")}
          className={`flex-1 py-3 px-6 rounded-full font-medium transition ml-2 ${
            activeTab === "Sell"
              ? "bg-purple-100 text-purple-700 border-2 border-purple-300"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Stock Info */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {tradingData.symbol}
            </h3>
            <p className="text-gray-600">{tradingData.companyName}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">
              ${tradingData.currentPrice.toLocaleString()}
            </p>
            <p className="text-green-600 font-medium">
              ▲ {tradingData.changePercent}%
            </p>
          </div>
        </div>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4">
          <button className="bg-gray-100 text-purple-600 px-4 py-2 rounded-full font-medium">
            Dollars $
          </button>
        </div>

        <div className="text-center mb-4">
          <input
            type="text"
            value={`$${orderAmount}`}
            onChange={(e) => setOrderAmount(e.target.value.replace("$", ""))}
            className="text-6xl font-light text-gray-400 bg-transparent border-none outline-none text-center w-full"
            placeholder="$0.00"
          />
        </div>

        <div className="flex items-center justify-center text-gray-500">
          <span>Buying Power: ${tradingData.buyingPower.toLocaleString()}</span>
          <span className="ml-2">›</span>
        </div>
      </div>

      {/* Order Options */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Order Type</span>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value as OrderType)}
            className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700"
          >
            <option value="Market order">Market order</option>
            <option value="Limit order">Limit order</option>
            <option value="Stop order">Stop order</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Valid until</span>
          <select
            value={validUntil}
            onChange={(e) => setValidUntil(e.target.value as ValidUntil)}
            className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700"
          >
            <option value="Day">Day</option>
            <option value="Good Till Canceled">Good Till Canceled</option>
            <option value="Immediate or Cancel">Immediate or Cancel</option>
          </select>
        </div>
      </div>

      {/* Review Button */}
      <button className="w-full bg-purple-300 text-white py-4 rounded-full font-medium text-lg hover:bg-purple-400 transition">
        Review {activeTab} Order
      </button>
    </div>
  );
};

export default TradingOrder;
