import { redirect } from "next/navigation";
import prisma from "../../prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const dynamic = "force-dynamic"

export default async function Home({params}: {params: string}) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const loggedIn = await isAuthenticated();
  const kindURL = process.env.KINDE_SITE_URL
  console.log(params)

  const addList = async (formData: FormData) => {
    "use server";

    if (user) {
      const res = await prisma.tasks.create({
        data: {
          text: formData.get("text") as string,
          listId: 1
        },
      });

      redirect(`/ToDos/${res.id}`);
    } else {
      redirect(`${kindURL}`);
    }
  };

  return (
    <>
      <div className="">This is the Home Page</div>
      {loggedIn ? (
        <form action={addList}>
          <input type="text" name="text" placeholder="add title" />
          <button type="submit">add</button>
        </form>
      ) : (
        ""
      )}
    </>
  );
}
