"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const DynamicWalletButton = dynamic(
  () => import("@/components/Buttons/WalletButton"),
  { ssr: false }
);

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname.endsWith("/"));
  }, [pathname]);

  return (
    <div className="w-full h-fit py-4 fixed top-0 backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="flex justify-center items-center">
          <Image
            src="/Lard_Vader.webp"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <span className="font-bold ml-[10px] block text-green-500">
            Starsol&nbsp;tracker
          </span>
        </div>

        <div
          className="hidden w-full md:flex gap-4 md:w-auto justify-between items-center"
          id="navbar-default"
        >
          <Link href="/">
            <p
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                pathname === "/"
                  ? "text-yellow-500"
                  : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-red-600 md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-red-600 md:dark:hover:bg-transparent"
              }`}
            >
              Home
            </p>
          </Link>
          <Link href="/wallet">
            <p
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                pathname === "/wallet"
                  ? "text-yellow-500"
                  : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-red-600 md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-red-600 md:dark:hover:bg-transparent"
              }`}
            >
              Wallet&nbsp;tracker
            </p>
          </Link>
          <Link href="/transactions">
            <p
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                pathname === "/transactions"
                  ? "text-yellow-500"
                  : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-red-600 md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-red-600 md:dark:hover:bg-transparent"
              }`}
            >
              Transactions
            </p>
          </Link>
          <DynamicWalletButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
