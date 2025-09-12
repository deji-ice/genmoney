import {
  AppleLogo,
  AppleLogoRetina,
  MetaLogo,
  MetaLogoAlt,
} from "@/assets/logos";
import Image, { StaticImageData } from "next/image";
import React from "react";
import PercentageChange from "./common/PercentChange";

interface RelatedStock {
  id: string;
  symbol: string;
  companyName: string;
  price: number;
  changePercent: number;
  direction: "up" | "down";
  logo: string | StaticImageData; // URL or imported image
}

const relatedStocksData: RelatedStock[] = [
  {
    id: "rivn",
    symbol: "RIVN",
    companyName: "Rivian Automotive",
    price: 203.95,
    changePercent: 2.34,
    direction: "up",
    logo: AppleLogoRetina,
  },
  {
    id: "lcid",
    symbol: "LCID",
    companyName: "Lucid Group",
    price: 203.95,
    changePercent: -1.87,
    direction: "down",
    logo: AppleLogo,
  },
  {
    id: "nio",
    symbol: "NIO",
    companyName: "Nio Inc.",
    price: 697.01,
    changePercent: -3.21,
    direction: "down",
    logo: MetaLogo,
  },
  {
    id: "xpev",
    symbol: "XPEV",
    companyName: "Xpeng Inc.",
    price: 697.01,
    changePercent: 4.56,
    direction: "up",
    logo: MetaLogoAlt,
  },
];

const RelatedStocks = () => {
  return (
    <section className="bg-white  ">
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
              <div className=" rounded-full w-[42px] h-[42px] bg-[#F8F8F9] p-3 flex items-center justify-center">
                <Image
                  className=" "
                  src={stock.logo}
                  alt={stock.companyName}
                  width={32}
                  height={32}
                />
              </div>

              <div>
                <h3 className="font-bold text-[#211B1B] mb-1">
                  {stock.symbol}
                </h3>
                <p className="text-xs text-[#383D41]">{stock.companyName}</p>
              </div>
            </div>

            {/* Right side - Price and Change */}
            <div className="text-right">
              <p className="font-bold text-sm text-[#211B1B] mb-1">
                ${stock.price}
              </p>
              <PercentageChange
                value={stock.changePercent}
                direction={stock.direction}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedStocks;
