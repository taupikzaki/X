import Feed from "@/Components/Feed";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div>
      {/* profile title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image src="/icons/back.svg" alt="back" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg">Taupik Al Muzaki</h1>
      </div>
      {/* info */}
      <div>
        <div className="relative w-full">
          <div className="w-full aspect-[3/1] relative">
            <Image src="/general/cover.jpg" alt="" width={600} height={200} />
          </div>
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image src="/general/avatar.jpeg" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image src="/icons/more.svg" alt="" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image src="/icons/explore.svg" alt="" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image src="/icons/message.svg" alt="" width={20} height={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* user detail */}
        <div className="p-4 flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold">Taupik Al Muzaki</h1>
            <span className="text-textGray text-sm">@TaupikAlMuzaki</span>
          </div>
          <p>Manager Di PT Mencari Cinta Sejati</p>
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/userLocation.svg"
                alt="location"
                width={20}
                height={20}
              />
              <p>Indonesia</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/date.svg" alt="date" width={20} height={20} />
              <p>Joined 2001</p>
            </div>
          </div>
          {/* following & follower */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <p className="font-bold">100</p>
              <p className="text-textGray text-[15px]">Followers</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold">100</p>
              <p className="text-textGray text-[15px]">Following</p>
            </div>
          </div>
        </div>
      </div>
      <Feed />
    </div>
  );
};

export default UserPage;
