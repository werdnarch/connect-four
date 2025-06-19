import React, { useState } from "react";

interface GridCircleProps {
  turn: "player1" | "player2";
  setTurn: (turn: "player1" | "player2") => void;
}

export default function GridCircle({ turn, setTurn }: GridCircleProps) {
  const handleClick = () => {
    turn === "player1" ? setTurn("player2") : setTurn("player1");
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        onClick={handleClick}
        className="relative w-full  rounded-full aspect-square border-3 border-black bg-black cursor-pointer"
      >
        <div className="w-full h-full bg-[#5c2ddf] rounded-full border-t-[5px] md:border-t-[7px] border-black"></div>
        <div
          className={` transition-colors duration-300 ease-in-out ${
            turn === "player1"
              ? "hover:bg-[#fd6687] opacity-60"
              : "hover:bg-[#ffce67] opacity-75"
          } w-full h-full absolute top-0 rounded-full`}
        ></div>
      </div>
    </div>
  );
}
