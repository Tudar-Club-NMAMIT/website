"use client";
import React from "react";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "../server/actions";
const index = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("yeppo");
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("image")) {
      alert("Please upload an image");
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
    };
    console.log(image);
  };
  const handlesubmit = async (e: any) => {
    e.preventDefault();
    console.log("submitted");
    let imageUrl;
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: image }),
      });
      console.log("Response");
      const data = await response.json();
      const imageUrl = data.data.url;
      // if (imageUrl) {
      //   const body = { title, desc, imageUrl, email };
      //   const response = await fetch("api/post", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(body),
      //   });
      // }
      const res = await createPost(title, desc);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="file"
          className="flex"
          accept="image/*"
          onChange={(e) => handleChangeImage(e)}
        />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" onChange={(e) => setDesc(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default index;
