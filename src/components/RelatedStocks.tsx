import React from "react";

interface RelatedStock {
  id: string;
  symbol: string;
  companyName: string;
  price: number;
  changePercent: number;
  direction: "up" | "down";
  logoIcon: string; // Simple text representation of logo
  logoColor: string;
}

const relatedStocksData: RelatedStock[] = [
  {
    id: "rivn",
    symbol: "RIVN",
    companyName: "Rivian Automotive",
    price: 203.95,
    changePercent: 2.34,
    direction: "up",
    logoIcon: "◆",
    logoColor: "text-orange-500",
  },
  {
    id: "lcid",
    symbol: "LCID",
    companyName: "Lucid Group",
    price: 203.95,
    changePercent: -1.87,
    direction: "down",
    logoIcon: "L",
    logoColor: "text-gray-800",
  },
  {
    id: "nio",
    symbol: "NIO",
    companyName: "Nio Inc.",
    price: 697.01,
    changePercent: -3.21,
    direction: "down",
    logoIcon: "⌒",
    logoColor: "text-gray-800",
  },
  {
    id: "xpev",
    symbol: "XPEV",
    companyName: "Xpeng Inc.",
    price: 697.01,
    changePercent: 4.56,
    direction: "up",
    logoIcon: "✕",
    logoColor: "text-gray-800",
  },
];

const RelatedStocks = () => {
  return (
    <div className="bg-white  ">
      <h2 className="text-2xl font-semibold text-[#090A0B] ">Related Stocks</h2>
      <hr className="my-3.5 text-[#E9EAEB]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8">
        {relatedStocksData.map((stock) => (
          <div
            key={stock.id}
            className="flex items-center justify-between py-3 "
          >
            {/* Left side - Logo, Symbol, Company */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className={`text-lg font-bold ${stock.logoColor}`}>
                  {stock.logoIcon}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[#211B1B] mb-1">{stock.symbol}</h3>
                <p className="text-xs text-[#383D41]">{stock.companyName}</p>
              </div>
            </div>

            {/* Right side - Price and Change */}
            <div className="text-right">
              <p className="font-bold text-sm text-[#211B1B] mb-1">${stock.price}</p>
              <div
                className={`flex items-center justify-end gap-1 text-[10px] font-medium ${
                  stock.direction === "up" ? "text-[#2EB200]" : "text-[#FF6154]"
                }`}
              >
                <span>{stock.direction === "up" ? "▲" : "▼"}</span>
                <span>{Math.abs(stock.changePercent)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedStocks;
