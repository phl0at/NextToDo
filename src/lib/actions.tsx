"use server";
import prisma from "../../prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const addToDo = async (formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    await prisma.toDo.create({
      data: {
        userId: user.id as string,
        title: formData.get("title") as string,
      },
    });
    revalidatePath(`/`);
  }
};

export const deleteToDo = async ({
  id,
  userId,
}: {
  id: string;
  userId: string;
}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user.id === userId) {
    await prisma.toDo.delete({ where: { id } });
    redirect(`/`);
  } else {
    alert("No naughty boys")
  }
};
