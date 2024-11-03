"use client"
import Link from "next/link";

type PostedLists = {
  lists: List[];
};


export default function Lists({ lists }: PostedLists) {
  return (
    <ul>
      {lists.map((list) => {
        return (
          <Link href={`/ToDos/${list.id}`} key={list.id}>
            {list.title}
          </Link>
        );
      })}
    </ul>
  );
}
