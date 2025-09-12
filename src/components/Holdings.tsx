import React from "react";

interface HoldingData {
  marketValue: number;
  totalReturn: number;
  quantity: number;
  averageCost: number;
  accountPercentage: number;
}

const holdingData: HoldingData = {
  marketValue: 2812.59,
  totalReturn: 2.3,
  quantity: 72.804215321,
  averageCost: 937.53,
  accountPercentage: 20,
};

const Holdings = () => {
  return (
    <div className="bg-white  ">
      <h2 className="text-lg md:text-2xl font-semibold text-[#090A0B] ">My Holding</h2>
      <hr className="my-3.5 text-[#E9EAEB]" />
      <div className="grid grid-cols-2 gap-8 text-[#090A0B]">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <p className="text-[#383D41] text-xs mb-1">Market Value</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">
                ${holdingData.marketValue.toLocaleString()}
              </span>
              <span className="flex items-center text-green-600 text-sm font-medium">
                ▲ {holdingData.totalReturn}% (Total return)
              </span>
            </div>
          </div>

          <div>
            <p className="text-[#383D41] text-xs mb-1">Average Cost</p>
            <p className="text-sm font-semibold ">${holdingData.averageCost}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <p className="text-[#383D41] text-xs mb-1">Quantity</p>
            <p className="text-sm font-semibold ">{holdingData.quantity}</p>
          </div>

          <div>
            <p className="text-[#383D41] text-xs mb-1">% of Account</p>
            <p className="text-sm font-semibold">
              {holdingData.accountPercentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
