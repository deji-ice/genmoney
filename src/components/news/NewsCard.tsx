import Image from "next/image";
import React from "react";

const NewsCard = () => {
  return (
    <div
      className="flex items-center gap-4 p-3 font-family-open-sauce
     border border-[#E8EBED] rounded-2xl hover:border-gray-200"
    >
      <Image
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537741/genmoney/image_4_sdnuuq.png"
        alt="news"
        width={400}
        height={200}
        className="h-[64px] w-[64px]"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-[#090A0B]">
          NuScale Power Initiated at Neutral by Citigroup
        </h3>
        <div className="flex items-center gap-1 text-xs text-[#60707A]">
          <span>1h</span>
          <span>•</span>
          <span>Reuters</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
