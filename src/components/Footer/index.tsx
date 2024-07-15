import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full mt-auto flex flex-col md:flex-row  h-full py-8 justify-center items-center gap-4 font-medium px-4 md:px-12 border-t-[1px] border-slate-900 bg-[#040112]">
      <div className="w-full max-w-screen-xl  md:p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center items-center">
            <Image
              src="/Lard_Vader.webp"
              alt="logo"
              width={60}
              height={60}
              className="cursor-pointer hover:animate-slowspin rounded-full"
            />

            <span className="font-bold ml-[10px] block text-gray-300">
              starsol tracker
            </span>
          </div>
          <ul className="flex flex-wrap gap-2 justify-center items-center md:gap-8 mb-6 text-base text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/privacy">privacy policy</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </div>
  );
};

export default Footer;
