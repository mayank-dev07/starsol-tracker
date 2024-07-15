"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CardTrading } from "../Cards/CardTrading";

const Trading = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div
      className="w-full h-full flex justify-center items-center py-32"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="100"
    >
      <div
        className="w-10/12 h-full rounded-3xl border-8 border-s-yellow-500 border-t-yellow-500
      border-e-indigo-500 border-b-indigo-500 p-4 md:p-12 flex flex-col justify-center items-center gap-8 "
      >
        <p className="text-lg md:text-5xl text-center">
          solana&nbsp;transactions
        </p>
        <CardTrading />
      </div>
    </div>
  );
};

export default Trading;
