"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useWalletStore } from "@/utils/zustand";

export function ModalButton() {
  const setValue = useWalletStore((state)=>state.setValue)
  const placeholders = ["Enter your Wallet address"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
   setValue(e?.target?.value)

  };

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-blue-500 rounded-[50px] w-full flex justify-center items-center text-center py-3 px-5">
          <div className="text-center w-full text-[#0E0E10]">
            Enter&nbsp;Wallet&nbsp;Address
          </div>
        </ModalTrigger>
        <ModalBody className="h-52 bg-[#04112]">
          <ModalContent>
            <ModalForm
              placeholders={placeholders}
              handleChange={handleChange}
            />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

const ModalForm = ({
  placeholders,
  handleChange,
}: {
  placeholders: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { setOpen } = useModal();
  const setWallet = useWalletStore((state)=> state.setWalletAddress)
  const value = useWalletStore((state)=> state.value)


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
   setWallet(value)
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center">
        Enter your wallet address
      </h4>
      <div className="h-min flex flex-col justify-center items-center px-4 w-full">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
