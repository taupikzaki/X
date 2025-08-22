import React from "react";
import Image from "./Image";

const Recomendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* user card */}
      <div className="flex items-center justify-between">
        {/* image & user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image path="/general/avatar2.jpg" alt="" w={100} h={100} />
          </div>
          <div>
            <h1 className="font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      {/* user card */}
      <div className="flex items-center justify-between">
        {/* image & user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image path="/general/avatar3.jpg" alt="" w={100} h={100} />
          </div>
          <div>
            <h1 className="font-bold">Jane Doe</h1>
            <span className="text-textGray text-sm">@janedoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      {/* user card */}
      <div className="flex items-center justify-between">
        {/* image & user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image path="/general/avatar4.jpg" alt="" w={100} h={100} />
          </div>
          <div>
            <h1 className="font-bold">Ashley Graham</h1>
            <span className="text-textGray text-sm">@ashley.g</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Recomendations;
