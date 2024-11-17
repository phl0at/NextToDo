import Link from "next/link";
import { addToDo } from "@/lib/actions";
import { useState } from "react";

export function Lists({ lists }: { user: User; lists: ToDo[] }) {
  const [titleText, setTitleText] = useState("");


  return (
    <main className="mt-10 ml-3">
      <ul>
        {lists.map((list: ToDo) => {
          return (
            <li key={list.id}>
              <Link href={`/list/${list.id}`}>{list.title}</Link>
            </li>
          );
        })}
      </ul>
      <form action={addToDo}>
        <input
          type="text"
          name="title"
          value={titleText}
          onChange={(e) => setTitleText(e.target.value)}
        />
        <button type="submit" onSubmit={() => setTitleText("")}>
          +
        </button>
      </form>
    </main>
  );
}
