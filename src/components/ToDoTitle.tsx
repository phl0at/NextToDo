"use client";
import React, { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import ListMenu from "./listMenu";
import DeleteButton from "./deleteButton";

const ToDoTitle = ({
  res,
  id,
  userId,
}: {
  res: ToDo;
  id: string;
  userId: string;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPos, setMenuPos] = useState<MenuPosition>({ x: 0, y: 0 });
  const buttons = [
    <DeleteButton
      key="delete"
      setShowMenu={setShowMenu}
      id={id}
      userId={userId}
    />,
  ];

  return (
    <div className="flex gap-4 justify-start items-center ">
      <TfiMenuAlt />
      {res.title}
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowMenu((prev) => !prev);
          setMenuPos({ x: e.pageX, y: e.pageY });
        }}
      >
        <GoKebabHorizontal />
      </button>
      {showMenu && (
        <ListMenu
          setShowMenu={setShowMenu}
          position={menuPos}
          buttons={buttons}
        />
      )}
    </div>
  );
};

export default ToDoTitle;
