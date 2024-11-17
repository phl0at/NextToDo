"use server";
import prisma from "../../prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const { getUser } = getKindeServerSession();

export const getCurrentUser = async () => {
  const user = await getUser();
  return user;
};

export const getAllLists = async () => {
  const lists = await prisma.toDo.findMany();
  return lists;
};
