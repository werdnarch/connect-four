import React, { useEffect, useState } from "react";

type CircleTypes = {
  index: number;
  pickedBy: "player1" | "player2" | null;
  picked: boolean;
};

interface GridCircleProps {
  turn: "player1" | "player2";
  setTurn: (turn: "player1" | "player2") => void;
  index: number;
  picked: boolean;
  setColumnArray: React.Dispatch<React.SetStateAction<CircleTypes[]>>;
  columnIndex: number;
  columnArray: CircleTypes[];
  pickedBy: "player1" | "player2" | null;
}

export default function GridCircle({
  turn,
  setTurn,
  index,
  picked,
  setColumnArray,
  columnIndex,
  columnArray,
  pickedBy,
}: GridCircleProps) {
  const [maxVal, setMaxVal] = useState<number>();
  const [minVal, setMinVal] = useState<number>();

  useEffect(() => {
    setMaxVal(
      Math.max(...columnArray.map((column: CircleTypes) => column.index))
    );
    setMinVal(
      Math.min(...columnArray.map((column: CircleTypes) => column.index))
    );
  }, []);

  const handleClick = () => {
    if (minVal === undefined || maxVal === undefined) return;

    for (let i = maxVal; i >= minVal; i--) {
      const circleIndex = columnArray.findIndex((c) => c.index === i);

      if (circleIndex === -1) continue;

      if (columnArray[circleIndex].picked === false) {
        const newColumnArray = [...columnArray];
        newColumnArray[circleIndex] = {
          ...newColumnArray[circleIndex],
          picked: true,
          pickedBy: turn,
        };
        setColumnArray(newColumnArray);
        break;
      }
    }

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
            picked === true
              ? `${pickedBy === "player1" ? "bg-[#fd6687]" : "bg-[#ffce67]"}`
              : turn === "player1"
              ? "md:hover:bg-[#fd6687] opacity-60"
              : "md:hover:bg-[#ffce67] opacity-75"
          } w-full h-full absolute top-0 rounded-full flex flex-col items-center justify-center `}
        ></div>
      </div>
    </div>
  );
}
