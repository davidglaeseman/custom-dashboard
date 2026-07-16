"use client";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
export default function LeftNavigation() {
  const [leftNavOpen, setLeftNavOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-50 min-w-50 p-2 ${leftNavOpen ? "left-0" : "-left-50"} md:left-0 transition-all flex flex-col fixed  top-12.5 h-[calc(100vh-50px)] bg-theme-900/90 border-r border-theme-700`}
      >
        <div className="grow">left nav top</div>
        <div className={`mb-12 md:mb-0 ${leftNavOpen ? "" : ""}`}>
          left nav bottom
        </div>
      </div>
      <button
        onClick={() => setLeftNavOpen((value) => !value)}
        className={`fixed md:hidden left-2 bottom-2 block cursor-pointer rounded p-2 bg-theme-600 ${leftNavOpen ? "text-white" : "text-zinc-300"}`}
      >
        <LuMenu size={25} />
      </button>
    </>
  );
}
