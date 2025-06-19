import React, { ReactNode } from "react";
import Image from "next/image";

interface ButtonProps {
  children: ReactNode;
  className: string;
  image?: string;
  onClick?: () => void;
}

export default function CustomButton({
  children,
  className,
  onClick,
  image,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center h-20 justify-between uppercase transition-all duration-100 ease-in-out font-bold p-4 w-full border-3 rounded-[1.1rem] border-black ${className} text-2xl cursor-pointer hover:border-[#5c2ddf] hover:shadow-[0_10px_0px_rgba(92,45,223,1)] shadow-[0_10px_0px_rgba(0,0,0,1)] `}
    >
      {children}
      {image && (
        <Image
          src={image}
          alt={"icon"}
          width={80}
          height={0}
          style={{ height: `auto` }}
        ></Image>
      )}
    </button>
  );
}
