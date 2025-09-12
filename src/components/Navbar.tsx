"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Bell } from "@/assets/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full z-40 fixed top-0 px-6 lg:px-20 bg-white border-b border-b-gray-300 font-open-sauce">
      <div className="flex h-16 items-center justify-between ">
        {/* Left: Logo */}
        <div className="flex items-center gap-10">
          <div>
            <Image
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1757449188/genmoney/GenLogo_h7nicj.svg"
              alt="Logo"
              width={135}
              height={20}
              className="h-5 w-[135px]"
            />
          </div>
          <div className="hidden lg:flex items-center gap-3 text-sm font-medium text-[#383D41] *:hover:text-[#3C00FF] *:hover:bg-[#F2F4F7] *:hover:rounded-full *:cursor-pointer">
            <p className="text-[#3C00FF] rounded-full px-[12px] py-[8px] bg-[#F2F4F7]">
              Stock & ETFs
            </p>
            <p className="rounded-full px-[12px] py-[8px]">Fixed Income</p>
            <p className="rounded-full px-[12px] py-[8px]">Crypto</p>
            <p className="rounded-full px-[12px] py-[8px]">Vantage</p>
          </div>
        </div>

        {/* Right: search + profile (desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <SearchBar />
          <Image
            src={Bell}
            alt="Bell icon"
            className="h-5 w-5 cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1757495074/genmoney/Avatar_ifkqtz.png"
            alt="user picture"
            width={40}
            height={40}
            className="h-10 w-10 cursor-pointer "
          />
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#383D41] hover:bg-[#F2F4F7] focus:outline-none"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`${
          open ? "block" : "hidden"
        } lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4`}
      >
        <div className="flex items-center justify-between">
          <SearchBar />
          <div className="flex items-center gap-4">
            <Image
              src={Bell}
              alt="Bell icon"
              className="h-5 w-5 cursor-pointer"
              width={20}
              height={20}
            />
            <Image
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1757495074/genmoney/Avatar_ifkqtz.png"
              alt="user picture"
              width={36}
              height={36}
              className="h-9 w-9 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm font-medium text-[#383D41]">
          <button
            onClick={() => setOpen(false)}
            className="text-left rounded-lg px-3 py-2 bg-[#F2F4F7] text-[#3C00FF]"
          >
            Stock & ETFs
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-left rounded-lg px-3 py-2 hover:bg-[#F2F4F7]"
          >
            Fixed Income
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-left rounded-lg px-3 py-2 hover:bg-[#F2F4F7]"
          >
            Crypto
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-left rounded-lg px-3 py-2 hover:bg-[#F2F4F7]"
          >
            Vantage
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
