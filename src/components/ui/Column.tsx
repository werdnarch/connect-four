"use client";

import React, { useEffect, useRef, useState } from "react";

interface ColumnProps {
  index: number;
  setWidth: (value: number) => void;
  setIndicatorX: (value: number) => void;
  defaultX: number;
  width: number;
}

export default function Column({
  index,
  setWidth,
  setIndicatorX,
  defaultX,
  width,
}: ColumnProps) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnX, setColumnX] = useState<number | null>(null);
  useEffect(() => {
    const updateX = () => {
      if (columnRef.current) {
        setWidth(columnRef.current.getBoundingClientRect().width);
        setColumnX(columnRef.current.getBoundingClientRect().x);
      }
    };

    updateX();

    window.addEventListener("resize", updateX);
    return () => window.removeEventListener("resize", updateX);
  });

  return (
    <div
      ref={columnRef}
      onMouseEnter={() => setIndicatorX(columnX ?? 0)}
      onMouseLeave={() => setIndicatorX(defaultX - width / 2)}
      className="w-full aspect-square  h-full grid grid-cols-1 grid-rows-6 gap-1 lg:gap-5"
    >
      {Array.from({ length: 6 }, (_, i: number) => (
        <div key={i} className="w-full h-full flex items-center justify-center">
          <div className="w-full aspect-square darkpurple border-black cursor-pointer border-t-4 md:border-t-8 shadow-[0_-2px_0px_rgba(0,0,0,1)] md:shadow-[0_-4px_0px_rgba(0,0,0,1)] rounded-full border-3"></div>
        </div>
      ))}
    </div>
  );
}
