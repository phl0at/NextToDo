import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";


export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser()
  const loggedIn = await isAuthenticated();
console.log(user.picture)


  return (
    <>
      <main className="w-screen h-10 flex ">
        <Link href="/">Home</Link>
        <Link href="/create">Create</Link>
        {loggedIn ? (
          <LogoutLink>Log Out</LogoutLink>
        ) : (
          <LoginLink>Log In</LoginLink>
        )}
        <button><Image src={user.picture} width={50} height={50} /></button>
      </main>
    </>
  );
}
