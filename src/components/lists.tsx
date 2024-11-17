import Link from "next/link";
import { addToDo } from "@/lib/actions";

export function Lists({ lists }: { user: User; lists: ToDo[] }) {
  return (
    <main className="mt-10 ml-3">
      <ul >
        {lists.map((list: ToDo) => {
          return (
            <Link href={`/list/${list.id}`} key={list.id}>
              {list.title}
            </Link>
          );
        })}
      </ul>
      <form action={addToDo}>
        <input type="text" name="title" />
        <button type="submit">+</button>
      </form>
    </main>
  );
}
