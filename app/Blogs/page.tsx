import React from "react";
import { prisma } from "../utils/db";
import { getPosts } from "../server/actions";

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
                <h3>{post.imageUrl}</h3>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default page;
