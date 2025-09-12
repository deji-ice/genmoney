import React from "react";

type CategoryProps = {
  category: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
};

const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <div className="flex flex-col p-4 w-full gap-2.5 min-w-[234px] font-family-open-sauce max-w-[234px] border border-[#E8EBED] rounded-[16px]">
      <img
        className="rounded-xl h-[111px] w-[191px]"
        src={category.image}
        alt=""
      />
      <h3 className="text-sm  text-[#090A0B] font-semibold">{category.title}</h3>
      <p className="text-[#60707A] text-xs">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
