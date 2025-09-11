import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full z-40 fixed bg-white flex items-center justify-between font-open-sauce px-20 py-5 border-b border-b-gray-300">
      <div className="flex items-center justify-between gap-10">
        <Image
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1757449188/genmoney/GenLogo_h7nicj.svg"
          alt="Logo"
          width={100}
          height={200}
          className="h-5 w-[135px]"
        />

        <span className="flex gap-3 text-sm font-medium text-[#383D41] *:hover:text-[#3C00FF] *:hover:bg-[#F2F4F7] *:hover:rounded-full *:cursor-pointer ">
          <p className="text-[#3C00FF] rounded-full px-[12px] py-[8px] bg-[#F2F4F7]">
            Stock & ETFs
          </p>
          <p className="rounded-full px-[12px] py-[8px] ">Fixed Income</p>
          <p className="rounded-full px-[12px] py-[8px] ">Crypto</p>
          <p className="rounded-full px-[12px] py-[8px] ">Vantage</p>
        </span>
      </div>

      <div className="flex items-center justify-between gap-20">
        <SearchBar />

        <div className="flex items-center gap-6">
          <Bell className="h-6 w-6 text-[#828F9B]" />
          <Image
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1757495074/genmoney/Avatar_ifkqtz.png"
            alt="user picture"
            width={200}
            height={200}
            className="h-10 w-10"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
