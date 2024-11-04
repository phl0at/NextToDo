import Link from "next/link";
import prisma from "../../prisma/client";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export default async function Lists({ user }: { user: User }) {
  const lists = await prisma.toDo.findMany();

  const addToDo = async (formData: FormData) => {
    if (user) {
      await prisma.toDo.create({
        data: {
          userId: user.id,
          title: formData.get("title") as string,
        },
      });
    }

    revalidatePath(`/ToDo`);
  };

  return (
    <>
      <ul>
        {lists.map((list) => {
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
