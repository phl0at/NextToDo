"use client";
import React from "react";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
// import Lists from "./lists";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const SideBar = () => {
  const [display, setDisplay] = useState(true);
  // const { user } = useKindeBrowserClient();

  return (
    <div className={display ? "mr-2" : "mr-14"}>
      <button
        className="absolute ml-3"
        onClick={() => setDisplay((prev) => !prev)}
      >
        <FiAlignJustify size="40" />
      </button>
      <div
        className={`${
          display ? "w-60" : "w-0"
        } bg-slate-600 overflow-hidden transition-all ease-in-out`}
        style={{
          height: "calc(100vh - 7.5rem)",
        }}
      >
        {/* <Lists user={user}/> */}
      </div>
    </div>
  );
};

export default SideBar;