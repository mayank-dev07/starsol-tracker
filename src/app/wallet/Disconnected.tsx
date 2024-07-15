"use client"
import { ModalButton } from "@/components/Buttons/ModalButton";
import { useWalletStore } from "@/utils/zustand";

import React from "react";


const Disconnected = () => {
  const show = useWalletStore((state)=>state.show) 
  return (
    <div>
      <div className={`min-h-screen justify-center items-center w-full ${show?"hidden":"flex"}`}>
        <div className="flex flex-col gap-10 items-center justify-end border-8 border-s-yellow-500 border-t-yellow-500  border-e-indigo-500 border-b-indigo-500 p-4 md:p-12 py-12 rounded-[50px] w-11/12 md:w-10/12  mt-20 ">
          <div className="flex flex-col gap-5 justify-center items-center ">
            <p className="text-lg md:text-4xl">track solana wallets</p>
            <p className="text-center text-base">
              Connect your Wallet and track all Solana coins, check your Daily
              PNL and more
            </p>
          </div>

          <div className="flex flex-col md:flex-row  gap-4">
            <ModalButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disconnected;
