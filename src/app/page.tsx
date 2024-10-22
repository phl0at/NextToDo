import { redirect } from "next/navigation";
import prisma from "../../script";

export default async function Home() {
  const addList = async (formData: FormData) => {
    "use server";

   const res = await prisma.toDo.create({
      data: {
        title: formData.get("title") as string,
      },
    });

    redirect(`/ToDos/${res.id}`)
  };



  return (
    <>
      <div className="">This is the Home Page</div>
      <form action={addList} >
        <input type="text" name="title" placeholder="add title" />
        <button type="submit">add</button>
      </form>

    </>
  );
}
