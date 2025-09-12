import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { RightVector } from "@/assets/icons";

type HeaderProps = {
  title: string;
  icon?: boolean;
  className?: string;
};

const Header = ({ title, icon = true, className }: HeaderProps) => {
  return (
    <header
      className={clsx(
        "flex items-center font-family-open-sauce justify-between mb-6",
        className
      )}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>

      {icon && (
        <Image
          src={RightVector}
          alt="Right icon"
          className="h-4 w-4 cursor-pointer"
          width={20}
          height={20}
          role="button"
        />
      )}
    </header>
  );
};

export default Header;
