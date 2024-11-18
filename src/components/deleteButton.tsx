import React, { MouseEvent } from "react";
import { deleteToDo } from "@/lib/actions";

const DeleteButton = ({
  id,
  setShowMenu,
}: {
  id: string;
  setShowMenu: (visible: boolean) => void;
}) => {
  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteToDo({ id });
    setShowMenu(false);
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
