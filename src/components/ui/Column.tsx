"use client";

import React, { useEffect, useRef, useState } from "react";
import GridCircle from "./GridCircle";

interface ColumnProps {
  index: number;
  setWidth: (value: number) => void;
  setIndicatorX: (value: number) => void;
  defaultX: number;
  width: number;
  turn: "player1" | "player2";
  setTurn: (turn: "player1" | "player2") => void;
}

type CircleTypes = {
  index: number;
  pickedBy: "player1" | "player2" | null;
  picked: boolean;
};

export default function Column({
  index,
  setWidth,
  setIndicatorX,
  defaultX,
  width,
  turn,

  setTurn,
}: ColumnProps) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnX, setColumnX] = useState<number | null>(null);

  const [columnArray, setColumnArray] = useState<CircleTypes[]>(
    Array.from({ length: 6 }).map((_, i) => ({
      index: index * 6 + i + 1 - 6,
      pickedBy: null,
      picked: false,
    }))
  );

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
      className="w-full aspect-square  h-full grid grid-cols-1 grid-rows-6 gap-1 md:gap-4 lg:gap-5"
    >
      {columnArray.map((circle: CircleTypes) => (
        <GridCircle
          key={circle.index}
          pickedBy={circle.pickedBy}
          turn={turn}
          setTurn={setTurn}
          index={circle.index}
          picked={circle.picked}
          setColumnArray={setColumnArray}
          columnArray={columnArray}
          columnIndex={index}
        />
      ))}
    </div>
  );
}
