import React from "react";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import Link from "next/link";
import { imagekit } from "@/utils";
import Image from "./Image";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("68a69c085c7cd75eb858d63f");

  console.log(fileDetails);
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Post type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Taupik reposted</span>
      </div>
      {/* Post content */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* avatar */}
        <div
          className={`${
            type === "status" && "hidden"
          } relative w-10 h-10 rounded-full overflow-hidden`}
        >
          <Image path="/general/avatar.jpeg" alt="" w={100} h={100} />
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP */}
          <div className="w-full flex justify-between">
            <Link href={`/taupik`} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}
              >
                <Image path="/general/avatar.jpeg" alt="" w={100} h={100} />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Taupik Al Muzaki</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @TaupikAlMuzaki
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 day ago</span>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* Text & Media */}
          <Link href={`/taupik/status/123`}>
            <p className={`${type === "status" && "text-lg"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              amet quod debitis facilis, nemo dignissimos ullam molestiae, culpa
              ducimus porro autem laboriosam officiis nam dicta, sint quas!
              Nostrum, ab corporis.
            </p>
          </Link>
          {/* <Image path="/general/post.jpeg" alt="" w={600} h={600} /> */}

          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}

          {type === "status" && (
            <span className="text-textGray">10:47 PM · August 18, 2025</span>
          )}
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
