import { BellRing, CirclePlus } from "lucide-react";
import { Stock } from "../../data/stocks";
import PercentageChange from "../common/PercentChange";

type StockRowProps = {
  stock: Stock;
};

const StockRow = ({ stock }: StockRowProps) => (
  <tr className="border-t border-t-[#E8EBED] last:border-b-0 text-sm">
    <td className="py-4 pr-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold">
          {stock.symbol.slice(0, 4)}
        </div>
        <span className="font-semibold text-[#383D41]">{stock.symbol}</span>
      </div>
    </td>
    <td className="py-4 pr-4 text-[#383D41]">{stock.name}</td>
    <td className="py-4 pr-4  text-[#383D41]">${stock.price}</td>
    <td className="py-4 pr-4">
      <PercentageChange
        value={stock.changePercent}
        direction={stock.direction || "up"}
      />
    </td>
    <td className="py-4 pr-2 text-center">
      <BellRing
        role="button"
        aria-label="Set alert"
        className="text-[#2b2829] h-5 w-5 hover:text-gray-900"
      />
    </td>
    <td className="py-4 pr-2 text-center">
      <CirclePlus
        role="button"
        aria-label="Add to watchlist"
        className="text-[#2b2829] h-5 w-5 hover:text-gray-900"
      />
    </td>
  </tr>
);
export default StockRow;
