import React from "react";
import Image from "./Image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* Trend event */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="/general/onepiece.avif"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">Bendera One Piece</h2>
          <span className="text-sm text-textGray">This month</span>
        </div>
      </div>
      {/* topik */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Open AI</h2>
        <span className="text-textGray text-sm">20k Posts</span>
      </div>
      {/* topik */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Economy • Trending</span>
          <Image path="/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Sri Mulyani</h2>
        <span className="text-textGray text-sm">20k Posts</span>
      </div>
      {/* topik */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Travel • Trending</span>
          <Image path="/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Bali</h2>
        <span className="text-textGray text-sm">20k Posts</span>
      </div>
    </div>
  );
};

export default PopularTags;
