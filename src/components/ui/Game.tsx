import React from "react";
import Logo from "./Logo";
import Grid from "./Grid";

interface GameProps {
  gameMode: "PlayerVsCPU" | "PlayerVsPlayer";
}

export default function Game({ gameMode }: GameProps) {
  return (
    <div className=" h-full w-full relative lightpurple flex flex-col items-center justify-center ">
      <section className="w-[90%] max-w-6xl flex flex-col items-center h-[90%]  z-10 gap-8 lg:gap-20">
        <header className="flex items-center justify-between w-full max-w-2xl ">
          <button className="text-white font-bold uppercase bg-[#5c2ddf] p-2 px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#fd6687]">
            Menu
          </button>

          <Logo />
          <button className="text-white font-bold uppercase bg-[#5c2ddf] p-2 px-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#fd6687]">
            Restart
          </button>
        </header>

        <div className="flex items-center gap-6 justify-between w-full lg:hidden">
          <div className="bg-white border-3 p-5 shadow-[0_8px_0px_rgba(0,0,0,1)] border-black rounded-2xl flex-1 text-black flex items-center justify-center gap-4">
            <p className="text-lg md:text-2xl whitespace-nowrap font-semibold uppercase">
              {gameMode === "PlayerVsCPU" ? "YOU" : "PLAYER 1"}
            </p>
            <span className="text-4xl font-bold">0</span>
          </div>
          <div className="bg-white border-3 p-5 shadow-[0_8px_0px_rgba(0,0,0,1)] border-black rounded-2xl flex-1 text-black flex items-center justify-center gap-4">
            <p className="text-lg md:text-2xl whitespace-nowrap font-semibold ">
              {gameMode === "PlayerVsCPU" ? "CPU" : "PLAYER 2"}
            </p>
            <span className="text-4xl font-bold">0</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-5">
          <div className="hidden lg:flex bg-white border-3 shadow-[0_8px_0px_rgba(0,0,0,1)] flex-1 max-w-[150px] text-black p-5 rounded-2xl flex-col items-center gap-4">
            <p className="text-lg md:text-2xl whitespace-nowrap font-semibold uppercase">
              {gameMode === "PlayerVsCPU" ? "YOU" : "PLAYER 1"}
            </p>
            <span className="text-4xl font-bold">0</span>
          </div>
          <Grid />
          <div className="hidden lg:flex bg-white border-3 shadow-[0_8px_0px_rgba(0,0,0,1)] flex-1 max-w-[150px] text-black p-5 rounded-2xl flex-col items-center gap-4">
            <p className="text-lg md:text-2xl whitespace-nowrap font-semibold ">
              {gameMode === "PlayerVsCPU" ? "CPU" : "PLAYER 2"}
            </p>
            <span className="text-4xl font-bold">0</span>
          </div>
        </div>
      </section>
      <div className="h-[30%] max-h-[220px] darkpurple rounded-t-[4rem] w-full absolute bottom-0"></div>
    </div>
  );
}
