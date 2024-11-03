"use client"
import Link from "next/link";
import ProfileButton from "./profileButton";
import { FaHouse } from "react-icons/fa6";
import Search from "./search";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Header() {
  const { user } = useKindeBrowserClient();

  return (
    <>
      <main className="w-screen h-10 flex justify-between items-center bg-blue-600 px-4">
        <Link
          className="h-fit w-[35px] flex justify-center items-center"
          href="/"
        >
          <FaHouse className="w-full h-full" />
        </Link>

        <Search />
        <ProfileButton user={user} />
      </main>
    </>
  );
}
