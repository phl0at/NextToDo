"use client";
import React from "react";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Lists } from "./lists";

const SideBar = ({ user, lists }: { user: User; lists: ToDo[] }) => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button
        className="absolute z-10"
        onClick={() => setDisplay((prev) => !prev)}
      >
        <FiAlignJustify size="40" />
      </button>
      <div
        className={`${
          display ? "w-60 mr-2" : "mr-14 w-0"
        } bg-slate-600 overflow-hidden transition-all ease-in-out `}
        style={{
          height: "calc(100vh - 7.5rem)",
        }}
      >
        <Lists user={user} lists={lists} />
      </div>
    </div>
  );
};

export default SideBar;
