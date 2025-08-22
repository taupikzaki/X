import React from "react";
import Post from "./Post";
import Image from "./Image";

const Comments = () => {
  return (
    <div>
      <form className="flex items-center justify-between gap-4 p-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image path="/general/avatar.jpeg" alt="taupik" w={100} h={100} />
        </div>
        <input
          type="text"
          placeholder="Post your reply"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
        />
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
          Reply
        </button>
      </form>
    </div>
  );
};

export default Comments;
