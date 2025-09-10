import React from "react";
import NewsCard from "./NewsCard";
import Header from "../common/Header";

const NewsSection = () => {
  return (
    <section className="bg-white  p-2 mt-8">
      <Header title="News" />
      <div className="px-6 flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
