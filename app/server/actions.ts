"use server";

import { prisma } from "../utils/db";

export async function createPost(title: string, desc: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: "amithjagannath02@gmail.com",
    },
  });
  await prisma.post.create({
    data: {
      title: title,
      content: desc,
      author: { connect: { id: user?.id } },
    },
  });
}
