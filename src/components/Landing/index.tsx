import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <main className="min-h-screen w-full flex flex-col gap-12 justify-center items-center relative">
      <div className="z-[-500]">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 opacity-70 absolute top-[-380px] h-full w-full left-0 z-[100] object-cover "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
      <div className=" flex justify-center items-center text-lg md:text-4xl lg:text-5xl flex-col gap-6 md:gap-8 mt-32 md:mt-0 font-extralight">
        <p>introducing&nbsp;starsol&nbsp;tracker</p>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-center">
          Easily Track and Manage Your Assets with starsol, the Web3 Dashboard.
        </p>
      </div>
      <Image
        src="/AnakinRevengeOfThePork.webp"
        alt="bg"
        width={300}
        height={300}
        className="object-contain absolute bottom-[450px] md:bottom-[-20px] right-20  md:right-0"
      />
      <Image
        src="/pig.png"
        alt="bg"
        width={300}
        height={300}
        className="object-contain absolute bottom-0 left-10 md:left-0"
      />
    </main>
  );
};

export default Landing;
