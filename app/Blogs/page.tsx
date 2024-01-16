import React from "react";
import { prisma } from "../utils/db";
async function getPosts() {
  const posts = await prisma.user.findMany({
    where: {
      email: "amithjagannath02@gmail.com",
    },
    include: {
      posts: true,
    },
  });

  return posts;
}

const page = async () => {
  const posts = await getPosts();
  console.log("Posts:" + posts);
  return (
    <div>
      <h1>User Posts</h1>
      {posts.map((user) => (
        <div key={user.id}>
          <h2>User: {user.name}</h2>
          <ul>
            {user.posts.map((post) => (
              <li key={post.id}>
                <strong>Title:</strong> {post.title}, <strong>Content:</strong>{" "}
                {post.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default page;
