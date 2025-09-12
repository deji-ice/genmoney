import React from "react";

interface StatisticsData {
  marketCap: string;
  peRatio: number;
  dividendYield: string;
  openPrice: number;
  fiftyTwoWeekRange: {
    low: number;
    high: number;
  };
  basicEPS: number;
}

const statisticsData: StatisticsData = {
  marketCap: "156.7M",
  peRatio: -2.85,
  dividendYield: "N/A",
  openPrice: 1.08,
  fiftyTwoWeekRange: {
    low: 0.52,
    high: 3.45,
  },
  basicEPS: -0.44,
};

const Statistics = () => {
  return (
    <section className="bg-white  ">
      <h2 className="text-2xl font-bold text-[#090A0B] ">Statistics</h2>
      <hr className="my-3.5 text-[#E9EAEB]" />
      <div className="grid grid-cols-3 gap-4 lg:gap-8">
        {/* Column 1 */}
        <div className="space-y-4">
          <div>
            <p className="text-[#383D41] text-sm mb-2">Market Cap</p>
            <p className="text-sm font-bold text-[#211B1B]">
              ${statisticsData.marketCap}
            </p>
          </div>

          <div>
            <p className="text-[#383D41] text-sm mb-2">Open Price</p>
            <p className="text-sm font-bold text-[#211B1B]">
              ${statisticsData.openPrice}
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div>
            <p className="text-[#383D41] text-sm mb-2">P/E Ratio</p>
            <p className="text-sm font-bold text-[#211B1B]">
              {statisticsData.peRatio}
            </p>
          </div>

          <div>
            <p className="text-[#383D41] text-sm mb-2">52W Range</p>
            <p className="text-sm font-bold text-[#211B1B]">
              ${statisticsData.fiftyTwoWeekRange.low} - $
              {statisticsData.fiftyTwoWeekRange.high}
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <div>
            <p className="text-[#383D41] text-sm mb-2">Dividend Yield</p>
            <p className="text-sm font-bold text-[#211B1B]">
              {statisticsData.dividendYield}
            </p>
          </div>

          <div>
            <p className="text-[#383D41] text-sm mb-2">Basic EPS</p>
            <p className="text-sm font-bold text-[#211B1B]">
              {statisticsData.basicEPS}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
