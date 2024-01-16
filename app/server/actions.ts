"use server";
import { prisma } from "../utils/db";
export async function createPost(
  title: string,
  desc: string,
  image: string,
  reference: string
) {
  const user = await prisma.user.findUnique({
    where: {
      email: "nittetudar@gmail.com",
    },
  });
  await prisma.post.create({
    data: {
      title: title,
      content: desc,
      imageUrl: image,
      reference: reference,
      author: { connect: { id: user?.id } },
    },
  });
}

export async function createEvent(
  image: string,
  title: string,
  date: string,
  organizedBy: string,
  venue: string,
  desc: string
) {
  const res = await prisma.events.create({
    data: {
      imageUrl: image,
      title: title,
      date: date,
      organizedBy: organizedBy,
      venue: venue,
      description: desc,
    },
  });
  console.log(res);
}

export async function getPosts() {
  const posts = await prisma.user.findMany({
    where: {
      email: "nittetudar@gmail.com",
    },
    include: {
      posts: true,
    },
  });

  return posts;
}
