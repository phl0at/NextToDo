import Lists from "@/components/lists";
import prisma from "../../../script";


export default async function ToDos() {
  const lists = await prisma.toDo.findMany();

  return (
    <>

      <Lists lists={lists} />

    </>
  );
}
