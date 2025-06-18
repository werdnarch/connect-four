"use client";

import Image from "next/image";
import Logo from "../components/ui/Logo";
import CustomButton from "../components/ui/CustomButton";
import Rules from "../components/ui/Rules";
import { useState } from "react";

export default function Home() {
  const [rulesOpen, setRulesOpen] = useState<boolean>(false);

  return (
    <main className="h-full flex items-center justify-center gap-4">
      <div className="w-[90%] flex flex-col items-center justify-center max-w-[480px] min-h-[500px] gap-18 border-3 shadow-[0_10px_0px_rgba(0,0,0,1)] rounded-4xl lightpurple p-4 py-6 border-black relative md:p-6 md:gap-24 md:py-8">
        <Logo />
        <div className="flex flex-col w-full items-center gap-4">
          <CustomButton className="test pink">
            <p>Play vs cpu</p>
          </CustomButton>
          <CustomButton className="test yellow text-black">
            <p>Play vs player</p>
          </CustomButton>
          <CustomButton
            onClick={() => setRulesOpen(true)}
            className="test bg-white text-black"
          >
            <p>Game Rules</p>
          </CustomButton>

          <Rules rulesOpen={rulesOpen} setRulesOpen={setRulesOpen} />
        </div>
      </div>
    </main>
  );
}
