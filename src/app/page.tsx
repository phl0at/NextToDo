import { redirect } from "next/navigation";
import prisma from "../../prisma/client";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Home() {
const {getUser} = getKindeServerSession();
const user = await getUser();
console.log(user)
  const addList = async (formData: FormData) => {
    "use server";

    const res = await prisma.toDo.create({
      data: {
        title: formData.get("title") as string,
        userId: user.id as string
      },
    });

    redirect(`/ToDos/${res.id}`);
  };

  return (
    <>
      <div className="">This is the Home Page</div>
      <form action={addList}>
        <input type="text" name="title" placeholder="add title" />
        <button type="submit">add</button>
      </form>
    </>
  );
}
