import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

export default function CustomButton({
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between uppercase transition-all duration-100 ease-in-out font-bold p-4 w-full border-3 rounded-[1.1rem] border-black ${className} text-2xl cursor-pointer hover:border-[#5c2ddf] hover:shadow-[0_10px_0px_rgba(92,45,223,1)] shadow-[0_10px_0px_rgba(0,0,0,1)] `}
    >
      {children}
    </button>
  );
}
