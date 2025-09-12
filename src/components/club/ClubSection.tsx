import React from "react";
import { clubPosts } from "./mockData";
import ClubCard from "./ClubCard";
import Header from "../common/Header";

const ClubSection: React.FC = () => {
  return (
    <section className="bg-white  p-2 mt-8 ">
      <Header title="Club" />

      <div className=" flex flex-col gap-4">
        {clubPosts.map((post) => (
          <ClubCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default ClubSection;
