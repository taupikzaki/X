import Feed from "@/Components/Feed";
import Share from "@/Components/Share";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray ">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For You
        </Link>
        <Link href="/" className="pb-3 flex items-center">
          Following
        </Link>
        <Link href="/" className="hidden pb-3 md:flex items-center">
          React JS
        </Link>
        <Link href="/" className="hidden pb-3 md:flex items-center">
          Javascript
        </Link>
        <Link href="/" className="hidden pb-3 md:flex items-center">
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
