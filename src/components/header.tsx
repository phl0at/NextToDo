import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ProfileButton from "./profileButton";

export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const loggedIn = await isAuthenticated();
  console.log(user);
  return (
    <>
      <main className="w-screen h-10 flex ">
        <Link href="/">Home</Link>
        <input type="text" placeholder="search bar" />
        <ProfileButton user={user} />
      </main>
    </>
  );
}
