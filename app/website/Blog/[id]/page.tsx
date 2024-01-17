import React from "react";
import { getPostById } from "@/app/server/actions";
import Image from "next/image";
const page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPostById(id);
  console.log("post" + post);
  return (
    <div className="flex-col justify-center items-center h-screen">
      <Image
        src={post?.imageUrl || ""}
        height={400}
        width={200}
        alt="Blog"
      ></Image>
      <h2>{post?.title}</h2>
      <h2>{post?.reference}</h2>
      <h2>{post?.createdBy}</h2>
    </div>
  );
};

export default page;
