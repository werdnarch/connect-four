"use client";

import React, { useRef, useEffect, useState } from "react";
import Column from "./Column";

import Image from "next/image";
import MarkerIcon from "./MarkerIcon";

export default function Grid() {
  const [width, setWidth] = useState<number>(0);

  const [indicatorX, setIndicatorX] = useState<number>();
  const [indicatorY, setIndicatorY] = useState<number>();
  const [defaultX, setDefaultX] = useState<number>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [turn, setTurn] = useState<"player1" | "player2">("player1");

  /* UPDATE Y AFTER EACH RESIZE */
  useEffect(() => {
    const updateY = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      setIndicatorY(rect.y);
      setDefaultX(rect.x + rect.width / 2);
    };
    updateY();
    window.addEventListener("resize", updateY);
    return () => window.removeEventListener("resize", updateY);
  }, []);

  useEffect(() => {
    if (defaultX !== undefined) {
      setIndicatorX(defaultX - width / 2);
    }
  }, [defaultX]);

  return (
    <div className="mx-auto">
      {/* COLUMN INDICATOR */}
      <div
        ref={wrapperRef}
        className="w-full h-[6vh]  px-3 md:px-4 lg:px-8 grid grid-rows-1 grid-cols-7 gap-1 lg:gap-5 border-3 border-transparent relative"
      >
        {" "}
        <div
          style={{
            width: `${width}px`,
            position: "fixed",
            top: `${indicatorY}px`,
            left: `${indicatorX}px`,
          }}
          className={`absolute h-[6vh] flex items-center justify-center transition-all duration-700 ease-in-out ${
            !indicatorX && "left-[50%] -translate-x-1/2"
          } ${turn === "player1" ? "text-[#fd6687]" : "text-[#ffce67]"}`}
        >
          <MarkerIcon />
        </div>
      </div>

      <div className="flex-1 h-[45vh] aspect-square lg:aspect-auto md:h-[50vh]  lg:h-[65vh] transition-all duration-200 ease-in-out max-h-[1000px] max-w-2xl border-3 border-black rounded-4xl shadow-[0_10px_0px_rgba(0,0,0,1)] p-3 md:p-4 lg:p-8 bg-white grid grid-rows-1 grid-cols-7 gap-3 md:gap-4 lg:gap-5">
        {Array.from({ length: 7 }, (_, i: number) => (
          <Column
            turn={turn}
            setTurn={setTurn}
            key={i + 1}
            index={i + 1}
            setWidth={setWidth}
            setIndicatorX={setIndicatorX}
            defaultX={defaultX as number}
            width={width}
          />
        ))}
      </div>
    </div>
  );
}
