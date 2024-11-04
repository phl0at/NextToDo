"use server";
import prisma from "../../prisma/client";
import { revalidatePath } from "next/cache";
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
