"use server";
import { Role } from "@prisma/client";
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
      credits: true,
    },
  });
  return post;
}
export async function getEventById(id: string) {
  const event = await prisma.events.findFirst({
    where: {
      id: id,
    },
    select: {
      title: true,
      description: true,
      imageUrl: true,
      date: true,
      venue: true,
      organizedBy: true,
    },
  });
  return event;
}

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getEvents() {
  const events = await prisma.events.findMany();
  return events;
}
export async function getUserByEmail(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      name: true,
      image: true,
      usn: true,
      year: true,
      role: true,
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

export async function updateUserfromDashboard(
  id: string,
  name: string,
  email: string,
  role: Role,
  member: boolean
) {
  const updatequery = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      role: role,
      email: email,
      isMember: member,
    },
  });
}

export async function updateBlogfromDashboard(
  id: string,
  title: string,
  createdBy: string,
  show: boolean
) {
  const updatequery = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      createdBy: createdBy,
      show: show,
    },
  });
}

export async function updateEventsfromDashboard(
  id: string,
  title: string,
  attendedBy: string,
  venue: string,
  date: string
) {
  const updatequery = await prisma.events.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      attendedBy: attendedBy,
      venue: venue,
      date: date,
    },
  });
}
export async function updateUserProfile(
  image: string,
  name: string,
  bio: string,
  email: string
) {
  const res = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      name: name,
      bio: bio,
      image: image,
    },
  });
  console.log("updated");
  return res;
}

export async function createMemberProfile( //TODO: Add branch field and see whether to remove name field
  email: string,
  name: string,
  usn: string,
  year: string,
  phone: string
) {
  const res = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      name: name,
      usn: usn,
      year: parseInt(year),
      role: Role.MEMBER,
      isMember: true,
    },
  });
  return res;
}
export const addScoreToUser = async (
  userId: string,
  isRight: boolean,
  points: number
) => {
  const perform = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      perform: true,
    },
  });
  console.log(perform);
  const performId = perform?.perform?.id;
  var updated;
  if (isRight) {
    updated = await prisma.perform.update({
      where: {
        id: performId,
      },
      data: {
        streak: {
          increment: 1,
        },
        score: {
          increment: points,
        },
      },
    });
  } else {
    updated = await prisma.perform.update({
      where: {
        id: performId,
      },
      data: {
        streak: 0,
      },
    });
  }
  return updated;
};
export const getPerform = async (userId: string) => {
  const perform = await prisma.perform.findUnique({
    where: {
      userId: userId,
    },
  });
  if (perform) {
    return perform;
  } else {
    const newperform = await prisma.perform.create({
      data: {
        userId: userId,
        score: 0,
        streak: 0,
      },
    });
    const updateuser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        perform: {
          connect: {
            id: newperform.id,
          },
        },
      },
    });
    return newperform;
  }
};
export const getUserId = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user?.id;
};
