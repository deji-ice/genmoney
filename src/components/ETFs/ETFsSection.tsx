import React from "react";
import { etfs } from "../../data/ETFs";
import ETFsCard from "./ETFsCard";
import Header from "../common/Header";

const ETFsSection = () => {
  return (
    <section className="bg-white  p-2 mt-8">
      <Header title="ETFs" />

      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {etfs.map((etf) => (
            <ETFsCard key={etf.id} etf={etf} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ETFsSection;
