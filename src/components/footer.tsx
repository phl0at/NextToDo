import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <main className="absolute w-screen  border-t-2 flex items-center bottom-0 h-20">
      <Link className="ml-3" href="https://github.com/phl0at/NextToDo">
        <FaGithub size="50" />
      </Link>
    </main>
  );
}
