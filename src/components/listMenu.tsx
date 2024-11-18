import React from "react";

const ListMenu = ({
  setShowMenu,
  position,
  selectedList,
}: {
  setShowMenu: (visible: boolean) => void;
  position: MenuPosition;
  selectedList: ToDo | null;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        zIndex: 20,
      }}
      onMouseLeave={() => setShowMenu(false)}
    >
      
      <ul>
        <li>Edit</li>
        <li>Delete</li>

      </ul>
    </div>
  );
};

export default ListMenu;
