import React, { useEffect, useState } from "react";
import Image from "next/image";

interface RulesProps {
  rulesOpen: boolean;
  setRulesOpen: (value: boolean) => void;
}

export default function Rules({ rulesOpen, setRulesOpen }: RulesProps) {
  const [overflow, setOverflow] = useState<boolean>(true);

  useEffect(() => {
    if (rulesOpen) {
      setTimeout(() => {
        setOverflow(false);
      }, 100);
    } else {
      setTimeout(() => {
        setOverflow(true);
      }, 100);
    }
  }, [rulesOpen]);

  return (
    <div
      className={`absolute ${overflow && "overflow-hidden"} p-4 md:p-8  ${
        rulesOpen
          ? "h-full w-full rounded-[1.8rem] opacity-100 bg-white pointer-events-auto bottom-0 z-10"
          : "h-17 w-[90%] rounded-[1.1rem] bottom-6 pointer-events-none opacity-0 "
      }  transition-all duration-300 ease-in-out py-8 `}
    >
      <div
        className={`h-full w-full transition-all duration-300 delay-100 ease-in-out flex flex-col items-center justify-between`}
      >
        <h1 className="text-center text-5xl text-black font-bold">RULES</h1>
        <div className="w-full text-left">
          <h2 className="text-[1.2rem] lightpurpletext font-semibold md:text-2xl uppercase mb-2">
            Objective
          </h2>

          <p className="text-zinc-600">
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
        </div>

        <div className="w-full text-left">
          <p className="lightpurpletext uppercase text-[1.2rem] font-semibold md:text-2xl mb-3">
            How to play
          </p>

          <ol className="text-zinc-600 list-none custom-counter">
            <li className=""> Red goes first in the first game.</li>
            <li className="">
              {" "}
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </li>
            <li className="">
              {" "}
              The game ends when there is a 4-in-a-row or a stalemate.
            </li>
            <li className="">
              The starter of the previous game goes second on the next game.
            </li>
          </ol>
        </div>
      </div>

      <button
        onClick={() => setRulesOpen(false)}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border border-black rounded-full cursor-pointer`}
      >
        <Image
          src="/images/icon-check.svg"
          alt="check"
          width={60}
          height={0}
          style={{ height: `auto` }}
        ></Image>
      </button>
    </div>
  );
}
