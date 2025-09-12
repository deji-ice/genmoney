import React from "react";
import { indices } from "../../data/indices";
import IndicesCard from "./IndicesCard";
import Header from "../common/Header";

const IndicesSection = () => {
  return (
    <section className="bg-white  md:p-2 mt-8">
      <Header title="Indices" icon={false} />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
    {indices.slice(0, 4).map((index) => (
          <IndicesCard key={index.id} index={index} className="lg:block" />
        ))}
        {/* Show  indices only on desktop */}
        {indices.slice(4).map((index) => (
          <IndicesCard key={index.id} index={index} className="hidden lg:block" />
        ))}
      </div>
    </section>
  );
};

export default IndicesSection;
