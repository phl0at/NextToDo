import Lists from "@/components/lists";
import prisma from "../../../prisma/client";


export default async function ToDos() {
  const lists = await prisma.toDo.findMany();

  return (
    <>
      <Lists lists={lists} />
    </>
  );
}
