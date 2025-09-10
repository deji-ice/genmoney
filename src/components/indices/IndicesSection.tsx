import React from "react";
import { indices } from "../../data/indices";
import IndicesCard from "./IndicesCard";
import Header from "../common/Header";

const IndicesSection = () => {
  return (
    <section className="bg-white  p-2 mt-8">
      <Header title="Indices" icon={false} />

      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {indices.map((index) => (
            <IndicesCard key={index.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndicesSection;
