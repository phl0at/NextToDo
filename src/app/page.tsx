import { redirect } from "next/navigation";
import prisma from "../../prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SideBar from "@/components/sideBar";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const lists = await prisma.toDo.findMany();
  const user = await getUser();
  // const loggedIn = await isAuthenticated();

  if (!user) {
    redirect("/landing");
  }

  // const addList = async (formData: FormData) => {
  //   "use server";

  //   if (user) {
  //     const res = await prisma.tasks.create({
  //       data: {
  //         text: formData.get("text") as string,
  //         listId: "asdf",
  //       },
  //     });

  //     redirect(`/ToDos/${res.id}`);
  //   }
  // };

  return (
    <main className="flex">
      <SideBar user={user} lists={lists} />
    </main>
  );
}
