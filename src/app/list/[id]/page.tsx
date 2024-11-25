import { revalidatePath } from "next/cache";
import prisma from "../../../../prisma/client";
import ToDoTitle from "@/components/ToDoTitle";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function List({ params }: { params: { id: string } }) {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  const id = params.id;
  const res = await prisma.toDo.findUnique({
    where: {
      id: id,
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
        listId: params.id,
      },
    });

    revalidatePath(`/ToDos/${params.id}`);
  };

  if (res) {
    return (
      <div className="flex flex-col gap-10 w-[80%]">
        <ToDoTitle res={res} id={id} userId={user.id} />

        <form className="flex flex-col w-full" action={addTask}>
          <input
            className="w-full bg-slate-900"
            type="text"
            name="text"
            placeholder="add task"
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return new Error("error");
  }
}
