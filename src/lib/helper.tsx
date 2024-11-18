"use server";
import prisma from "../../prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const { getUser, isAuthenticated } = getKindeServerSession();

export const getCurrentUser = async () => {
  const user = await getUser();
  return user;
};

export const getAllLists = async () => {
  const user = await getUser();
  const authenticated = await isAuthenticated()
  if (authenticated) {
    const lists = await prisma.toDo.findMany({ where: { userId: user.id } });
    return lists;
  } else {
    return []
  }
};
