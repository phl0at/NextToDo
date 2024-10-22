import { revalidatePath } from "next/cache";
import prisma from "../../../../script";
import Error from "./not-found";

export default async function List({ params }: any) {
  const id = Number(params.id);
  const res = await prisma.toDo.findUnique({
    where: {
      id,
    },
  });
  const tasks = await prisma.tasks.findMany({
    where: {
      listId: id,
    },
  });

  const addTask = async (formData: FormData) => {
    "use server";

    await prisma.tasks.create({
      data: {
        text: formData.get("text") as string,
        listId: Number(params.id),
      },
    });

    revalidatePath(`/ToDos/${params.id}`);
  };

  if (res) {
    return (
      <>
        <div>{res.title}</div>
        {tasks.map((task) => (
          <ul>
            <li key={task.id}>{task.text}</li>
          </ul>
        ))}
        <form action={addTask}>
          <input type="text" name="text" placeholder="add task" />
          <button type="submit">Add Task</button>
        </form>
      </>
    );
  } else {
    return Error();
  }
}
