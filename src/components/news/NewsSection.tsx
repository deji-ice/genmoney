import React from "react";
import NewsCard from "./NewsCard";
import Header from "../common/Header";
import clsx from "clsx";

interface NewsSectionProps {
  columns?: 1 | 2 | 3;
  maxItems?: number;
  separator?: boolean;
  className?: string;
}

const NewsSection = ({
  columns = 1,
  maxItems = 3,
  className = "",
  separator = false,
}: NewsSectionProps) => {
  return (
    <section className={clsx("bg-white", className)}>
      <Header title={"News"} />
      {separator && <hr className="mb-5 text-[#E9EAEB]" />}
      <div
        className={clsx(" gap-4", {
          "grid grid-cols-1": columns === 1,
          "grid grid-cols-2": columns === 2,
        })}
      >
        {Array.from({ length: maxItems }).map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
