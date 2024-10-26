import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Header() {
  const { isAuthenticated } = getKindeServerSession();
  const loggedIn = await isAuthenticated();

  return (
    <>
      <main>
        <Link href="/">Home</Link>
        <Link href="/create">Create</Link>
        {loggedIn ? (
          <LogoutLink>Log Out</LogoutLink>
        ) : (
          <LoginLink>Log In</LoginLink>
        )}
      </main>
    </>
  );
}
