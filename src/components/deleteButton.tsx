import React from "react";
import { deleteToDo } from "@/lib/actions";
import { useState } from "react";
import Modal from "./modal";

const DeleteButton = ({
  id,
  userId,
  setShowMenu,
}: {
  id: string;
  userId: string;
  setShowMenu: (visible: boolean) => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = async () => {
    await deleteToDo({ id, userId });
    setShowMenu(false);
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        Delete
      </button>
      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onConfirm={handleDelete}
        children={"Are you sure you want to delete this ToDo list?"}
      />
    </>
  );
};

export default DeleteButton;
