import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Smile from "./Smile";

export default function ModeOpen({ modeOpen }: { modeOpen: boolean }) {
  return (
    <div
      className={` top-0  absolute w-full h-full ${
        modeOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } lightpurple transition-all duration-500 ease-in-out flex flex-col items-center justify-center  gap-18 rounded-4xl lightpurple p-4 py-6 md:p-6 md:gap-24 md:py-8`}
    >
      <Smile />
      <div className="flex flex-col w-full items-center gap-4">
        <CustomButton className="pink">
          <p className="mx-auto">Easy</p>
        </CustomButton>
        <CustomButton className="yellow">
          <p className="mx-auto text-black">Normal</p>
        </CustomButton>
        <CustomButton className="bg-white">
          <p className="mx-auto text-black">Hard</p>
        </CustomButton>
      </div>
    </div>
  );
}
