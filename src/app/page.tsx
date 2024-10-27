import { redirect } from "next/navigation";
import prisma from "../../prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const loggedIn = await isAuthenticated();

  const addList = async (formData: FormData) => {
    "use server";

    if (user) {
      const res = await prisma.toDo.create({
        data: {
          title: formData.get("title") as string,
          userId: user?.id,
        },
      });

      redirect(`/ToDos/${res.id}`);
    } else {
      redirect("/");
    }
  };

  return (
    <>
      <div className="">This is the Home Page</div>
      {loggedIn ? (
        <form action={addList}>
          <input type="text" name="title" placeholder="add title" />
          <button type="submit">add</button>
        </form>
      ) : (
        ""
      )}
    </>
  );
}
