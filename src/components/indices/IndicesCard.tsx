import React from "react";
import { Index } from "../../data/indices";
import PercentageChange from "../common/PercentChange";
import Image from "next/image";

interface IndicesCardProps {
  index: Index;
}

const IndicesCard = ({ index }: IndicesCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 rounded-2xl font-family-open-sauce py-3 px-[17px] h-[156px] border border-[#E8EBED] hover:border-gray-200 transition-colors">
      <div className="flex flex-col items-center gap-2">
        <Image
          className={`w-8 h-8 rounded-full `}
          src={index.icon}
          alt={index.symbol}
          width={32}
          height={32}
        />

        <div>
          <h3 className="text-sm font-bold text-[#090A0B] mb-1">
            {index.symbol}
          </h3>
          <p className="text-[#60707A] text-[11px]">{index.name}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 text-xs font-medium text-[#090A0B]">
        ${index.price.toLocaleString()}
        <PercentageChange
          value={index.changePercent}
          direction={index.direction}
        />
      </div>
    </div>
  );
};

export default IndicesCard;
