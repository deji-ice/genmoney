"use client";
import { MoreVertical } from "lucide-react";
import { Stock } from "../../data/stocks";
import PercentageChange from "../common/PercentChange";
import { AddIcon, BellRinging } from "@/assets/icons";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type StockRowProps = {
  stock: Stock;
};

const StockRow = ({ stock }: StockRowProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsPopoverOpen(false);
      }
    };

    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  const handleRowClick = () => {
    router.push("/lab");
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <tr 
      onClick={handleRowClick}
      className="border-t border-t-[#E8EBED] last:border-b-0 text-sm hover:bg-gray-50 transition-colors cursor-pointer"
    >
      <td className="py-4 pr-4 flex flex-col gap-2 md:block">
        <div className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] rounded-full hidden bg-gray-100 md:flex items-center justify-center text-xs font-semibold">
            <Image
              src={stock.logo}
              alt={`${stock.name} logo`}
              className="rounded-full"
            />
          </div>

          <span className="font-semibold text-[#211B1B] md:text-[#383D41]">
            {stock.symbol}
          </span>
        </div>
        <span className="text-[#383D41] text-xs md:hidden">{stock.name}</span>
      </td>
      <td className="py-4 pr-4 text-[#383D41] sr-only md:not-sr-only">
        {stock.name}
      </td>
      <td className="py-4 pr-4 space-y-2 text-[#383D41] font-bold md:font-normal">
        ${stock.price}
        <div className="md:hidden">
          <PercentageChange
            value={stock.changePercent}
            direction={stock.direction || "up"}
          />
        </div>
      </td>
      <td className="py-4 pr-4 hidden md:block">
        <PercentageChange
          value={stock.changePercent}
          direction={stock.direction || "up"}
        />
      </td>

      {/* Desktop Actions - Hidden on smaller screens */}
      <td className="py-4 pr-2 text-center hidden lg:table-cell">
        <div onClick={handleActionClick}>
          <Image
            src={BellRinging}
            alt="Bell icon"
            className="h-5 w-5 cursor-pointer"
            width={20}
            height={20}
            role="button"
            aria-label="Set alert"
          />
        </div>
      </td>
      <td className="py-4 pr-2 text-center hidden lg:table-cell">
        <div onClick={handleActionClick}>
          <Image
            src={AddIcon}
            alt="Add icon"
            aria-label="Add to watchlist"
            role="button"
            className="h-5 w-5 cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </td>

      {/* Mobile Actions - Visible on smaller screens */}
      <td className="py-4 pr-2 text-center lg:hidden relative">
        <div className="relative" ref={popoverRef} onClick={handleActionClick}>
          <button
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="More actions"
          >
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </button>

          {/* Popover */}
          {isPopoverOpen && (
            <div className="absolute right-5.5 top-5.5 z-40 bg-white border border-gray-200 rounded-[3px] shadow-lg py-2 min-w-[152px]">
              <button className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#60707A] hover:bg-gray-50 transition-colors">
                <Image
                  src={AddIcon}
                  alt="Add icon"
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
                Add to watchlist
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#60707A] hover:bg-gray-50 transition-colors">
                <Image
                  src={BellRinging}
                  alt="Bell icon"
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
                Set Alert
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default StockRow;