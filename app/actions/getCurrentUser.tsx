import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/libs/prismadb";

export async function getCurrentUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
