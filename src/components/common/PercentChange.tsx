import { Down, Up } from "@/assets/icons";
import Image from "next/image";
import clsx from "clsx";

const PercentageChange: React.FC<{
  value: number;
  direction?: "up" | "down";
}> = ({ value, direction = "up" }) => {
  const positive = direction === "up";
  return (
    <div
      className={clsx(
        "flex items-center gap-1",
        positive ? "text-[#2EB200]" : "text-[#FF6154]"
      )}
    >
      <Image
        src={positive ? Up : Down}
        alt="Change icon"
        className="h-2.5 w-2.5"
        width={10}
        height={10}
      />
      <span className="text-sm font-medium"> {value}%</span>
    </div>
  );
};

export default PercentageChange;
