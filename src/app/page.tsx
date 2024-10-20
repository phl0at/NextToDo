import { revalidatePath } from "next/cache";
import prisma from "../../script";
import Lists from "@/components/lists";

export default async function Home() {
  const addList = async (formData: FormData) => {
    "use server";

    await prisma.toDo.create({
      data: {
        title: formData.get("title") as string,
      },
    });

    revalidatePath("/");
  };

  const lists = await prisma.toDo.findMany()
  console.log(lists)


  return (
    <>
      <div className="">This is the Home Page</div>
      <form action={addList} >
        <input type="text" name="title" placeholder="add title" />
        <button type="submit">add</button>
      </form>
      <Lists lists={lists}/>
    </>
  );
}
