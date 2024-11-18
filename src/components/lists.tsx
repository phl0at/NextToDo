import Link from "next/link";
import { addToDo } from "@/lib/actions";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import ListMenu from "./listMenu";

export function Lists({ lists }: { user: User; lists: ToDo[] }) {
  const [titleText, setTitleText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [menuPos, setMenuPos] = useState<MenuPosition>({ x: 0, y: 0 });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await addToDo(formData);
    setTitleText("");
  };

  return (
    <main className="mt-10 ml-3">
      <ul>
        {lists.map((list: ToDo) => {
          return (
            <li key={list.id} className="flex">
              <CiMenuKebab />
              <Link href={`/list/${list.id}`}>{list.title}</Link>
              {showMenu && (
                <ListMenu setShowMenu={setShowMenu} setMenuPos={setMenuPos} />
              )}
            </li>
          );
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={titleText}
          onChange={(e) => setTitleText(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </main>
  );
}
