"use server"
import Link from "next/link";
import prisma from "../../prisma/client";
import { revalidatePath } from "next/cache";

// export const dynamic = "force-dynamic";

export async function Lists({ user, lists }: { user: User; lists: ToDo[] }) {

  const addToDo = async (formData: FormData) => {
    "use server";
    if (user) {
      await prisma.toDo.create({
        data: {
          userId: user.id as string,
          title: formData.get("title") as string,
        },
      });
      revalidatePath(`/ToDo`);
    }
  };

  return (
    <>
      <ul>
        {lists.length &&
          lists.map((list: ToDo) => {
            return (
              <Link href={`/ToDos/${list.id}`} key={list.id}>
                {list.title}
              </Link>
            );
          })}
      </ul>
      <form action={addToDo}>
        <input type="text" name="title" />
        <button type="submit" />
      </form>
    </>
  );
}
