"use server";
import { emit } from "process";
import { prisma } from "../utils/db";
export async function createPost(
  title: string,
  desc: string,
  image: string,
  createdBy: string,
  reference: string,
  credits: string
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
      createdBy: createdBy,
      credits: credits,
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

export async function getPostById(id: string) {
  const post = await prisma.post.findFirst({
    where: {
      id: id,
    },
    select: {
      title: true,
      content: true,
      imageUrl: true,
      reference: true,
      createdBy: true,
    },
  });
  return post;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      name: true,
      image: true,
      isMember: true,
      bio: true,
    },
  });
  return user;
}
export async function getAllEvents() {
  const events = await prisma.events.findMany();
  return events;
}

export async function updateUserProfile(image:string, name:string, bio:string,email:string) {
  const res = await prisma.user.update({
    where:{
      email:email
    },
    data:{
      name:name,
      bio:bio,
      image:image,
    }

})
}
