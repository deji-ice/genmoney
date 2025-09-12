import React from "react";
import { ClubPost } from "./mockData";
import Image from "next/image";
import { Heart, MessageCircleIcon, Share, TrendingUp } from "lucide-react";
import { ShareIcon, VerifiedIcon } from "@/assets/icons";

interface ClubCardProps {
  post: ClubPost;
}

const ClubCard = ({ post }: ClubCardProps) => {
  return (
    <div className="rounded-xl flex gap-3  px-[12px] py-[24px] border border-[#E8EBED] text-[#090A0B] font-family-open-sauce hover:border-gray-200 transition-colors">
      <Image
        src={post.user.avatar}
        alt={post.user.name}
        className="w-7.5 h-7.5 rounded-full"
        width={48}
        height={48}
      />

      <div className="flex flex-col  items-start gap-3 ">
        <div className="flex justify-between w-full ">
          <div className="flex items-center gap-2">
            <span className="font-medium text-xs">{post.user.name}</span>
            {post.user.isVerified && (
              <Image
                src={VerifiedIcon}
                alt="Verified icon"
                className="h-3.5 w-3.5"
                width={14}
                height={14}
              />
            )}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#60707A]">
            <span>{post.user.username}</span>
            <span>•</span>
            <span>{post.timestamp}</span>
          </div>
        </div>

        {/* Post Content */}
        <div className="">
          <p className="text-xs font-medium">{post.content}</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className={`p-1  rounded-[4px] text-[8px] font-medium border ${
                tag === "Bullish"
                  ? "border-[#2EB200] text-[#2EB200] "
                  : "border-[#383D41] text-[#383D41] "
              }`}
            >
              {tag !== "Bullish" ? (
                tag
              ) : (
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-[10px] w-[10px]" /> {tag}
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Engagement Metrics */}
        <div className="flex items-center justify-between w-full text-[#60707A]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MessageCircleIcon className="h-3 w-3" />
              <span className="text-xs">{post.engagement.comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span className="text-xs ">{post.engagement.likes}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={ShareIcon}
              alt="Share icon"
              className="h-3.5 w-3.5"
              width={14}
              height={14}
            />

            <span className="text-xs ">{post.engagement.shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
