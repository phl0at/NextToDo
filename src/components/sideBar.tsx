"use client";
import React from "react";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

const SideBar = () => {
  const [display, setDisplay] = useState(true);
  return (
    <main>
      <button className="absolute" onClick={() => setDisplay((prev) => !prev)}>
        <FiAlignJustify />
      </button>
      <div className={display ? "w-20 h-20 bg-slate-600" : "w-0 h-20"}></div>
    </main>
  );
};

export default SideBar;
