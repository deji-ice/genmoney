import React from "react";
import { ETF } from "../../data/ETFs";
import PercentageChange from "../common/PercentChange";

interface ETFsCardProps {
  etf: ETF;
}

const ETFsCard = ({ etf }: ETFsCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-3  font-family-open-sauce border border-[#F2F4F7] hover:border-gray-200 transition-colors">
      <div className="space-y-3">
        {/* Symbol and Name */}
        <div>
          <h3 className="text-sm font-semibold text-[#090A0B] mb-1">
            {etf.symbol}
          </h3>
          <p className="text-[#60707A] text-xs">{etf.name}</p>
        </div>

        {/* Price and Change */}
        <div className="flex items-end justify-between pt-4">
          <div className="text-sm font-bold text-[#090A0B]">
            ${etf.price}
          </div>
          <PercentageChange
            value={etf.changePercent}
            direction={etf.direction}
          />
        </div>
      </div>
    </div>
  );
};

export default ETFsCard;
