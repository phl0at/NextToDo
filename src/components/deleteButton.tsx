import React from "react";
import { deleteToDo } from "@/lib/actions";

const DeleteButton = ({ id }: { id: string }) => {
  return <button onClick={(e) => deleteToDo(e, { id })}>Delete</button>;
};

export default DeleteButton;
