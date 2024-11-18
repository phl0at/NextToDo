import Link from "next/link";
import { addToDo } from "@/lib/actions";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import ListMenu from "./listMenu";

type MenuPosition = {
  x: number;
  y: number;
};


export function Lists({ lists }: { lists: ToDo[] }) {
  const [titleText, setTitleText] = useState("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuPos, setMenuPos] = useState<MenuPosition>({ x: 0, y: 0 });
  const [selectedList, setSelectedList] = useState<ToDo | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await addToDo(formData);
    setTitleText("");
  };

  const handleContextMenu = (
    e: React.MouseEvent<HTMLElement>,
    list: ToDo
  ) => {
    e.preventDefault();
    setMenuPos({ x: e.pageX, y: e.pageY });
    setShowMenu(true);
    setSelectedList(list);
  };

  return (
    <main className="mt-10 ml-3">
      <ul>
        {lists.map((list: ToDo) => (
          <li
            key={list.id}
            className="flex"
            onContextMenu={(e) => handleContextMenu(e, list)}
          >
            <CiMenuKebab />
            <Link href={`/list/${list.id}`}>{list.title}</Link>
          </li>
        ))}
      </ul>
      {showMenu && (
        <ListMenu
          setShowMenu={setShowMenu}
          position={menuPos}
          selectedList={selectedList}
        />
      )}
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
