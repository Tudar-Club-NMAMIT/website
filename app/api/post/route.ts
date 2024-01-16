// pages/api/post.js
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../utils/db";
export async function POST(request: NextRequest) {
  const { title, desc, imageUrl, email } = await request.json();
  console.log(title, desc, imageUrl, email);
  const user = await prisma.user.findUnique({
    where: {
      email: email, // Replace 'email' with the actual email you have
    },
  });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: desc,
      author: { connect: { id: user?.id } },
    },
  });
  console.log(result);

  return NextResponse.json({ data: result });
}
