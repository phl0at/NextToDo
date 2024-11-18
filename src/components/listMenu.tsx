import React from "react";

const ListMenu = ({
  setShowMenu,
  setMenuPos,
}: {
  setShowMenu: (visible: boolean) => void;
  setMenuPos: (position: MenuPosition) => void;
}) => {
  const handleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuPos({ x: e.pageX, y: e.pageY });
    setShowMenu(true);
  };

  return (
    <main onContextMenu={handleMenu} className="w-100 h-100 bg-white"></main>
  );
};

export default ListMenu;
