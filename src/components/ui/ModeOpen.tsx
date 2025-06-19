import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Smile from "./Smile";
import { Mode } from "fs";

interface ModeOpenProps {
  modeOpen: boolean;
  setGameStarted: (v: boolean) => void;
}

export default function ModeOpen({ modeOpen, setGameStarted }: ModeOpenProps) {
  return (
    <div
      className={` top-0  absolute w-full h-full ${
        modeOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } lightpurple transition-all duration-500 ease-in-out flex flex-col items-center justify-center  gap-18 rounded-4xl lightpurple p-4 py-6 md:p-6 md:gap-24 md:py-8`}
    >
      <Smile />
      <div className="flex flex-col w-full items-center gap-4">
        <CustomButton className="pink" onClick={() => setGameStarted(true)}>
          <p className="mx-auto">Easy</p>
        </CustomButton>
        <CustomButton className="yellow" onClick={() => setGameStarted(true)}>
          <p className="mx-auto text-black">Normal</p>
        </CustomButton>
        <CustomButton className="bg-white" onClick={() => setGameStarted(true)}>
          <p className="mx-auto text-black">Hard</p>
        </CustomButton>
      </div>
    </div>
  );
}
