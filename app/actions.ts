"use server";
import { auth } from "@/lib/auth/server";
import { db } from "@/db";
import { pagesTable } from "@/db/schema";
import { desc } from "drizzle-orm";
import { redirect } from "next/navigation";

export type AuthUser = Awaited<ReturnType<typeof getAuthUser>>;

export const getAuthUser = async () => {
  const { data: session } = await auth.getSession();
  if (!session?.user) throw new Error("Unauthorized");
  return session.user;
};

export const signOutUser = async () => {
  await auth.signOut();
  redirect("/");
};

export const getUser = async () => getAuthUser();

export const getUserAuth = async (): Promise<AuthUser | false> => {
  try {
    return await getAuthUser();
  } catch {
    return false;
  }
};

export const getPages = async () =>
  db.select().from(pagesTable).orderBy(desc(pagesTable.id));
