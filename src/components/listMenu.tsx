import React, { useEffect, useRef } from "react";

const ListMenu = ({
  setShowMenu,
  position,
  selectedList,
}: {
  setShowMenu: (visible: boolean) => void;
  position: MenuPosition;
  selectedList: ToDo | null;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={menuRef}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        zIndex: 20,
      }}

    >

      <ul>
        <li>Edit</li>
        <li>Delete</li>

      </ul>
    </div>
  );
};

export default ListMenu;
