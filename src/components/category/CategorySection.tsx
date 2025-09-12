import React from "react";
import Header from "../common/Header";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

const CategorySection = () => {
  return (
    <section >
      <Header title="Categories" />
      <div className="flex gap-4 overflow-scroll scrollbar-hide">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
