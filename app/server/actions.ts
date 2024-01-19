"use server";
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

export async function getUsers(){
  const users = await prisma.user.findMany();
  return users;
}

export async function getEvents(){
  const events = await prisma.events.findMany();
  return events;
}

export async function updateUserfromDashboard(id:string, name:string, email:string, role:string, member:boolean){
  const updatequery = await prisma.user.update({
    where:{
        id: id,
    },
    data:{
        name: name,
        role: role,
        email: email,
        isMember: member
    
    },
})
}

export async function updateBlogfromDashboard(id:string, title:string, createdBy:string, show: boolean){
  const updatequery = await prisma.post.update({
    where:{
      id: id,
    },
    data:{
      title: title,
      createdBy: createdBy,
      show: show,
    }
  })
}

export async function updateEventsfromDashboard(id:string, title:string, attendedBy: string, venue: string, date:string){
  const updatequery = await prisma.events.update({
    where:{
      id: id,
    },
    data:{
        title: title,
        attendedBy: attendedBy,
        venue: venue,
        date: date,
    }
  })
}
