"use client"
import React from "react";
import { useSession } from "next-auth/react";
import { getUserById } from "@/app/server/actions";
import ProfilePage from "../components/ProfilePage";
export default async function Profile({params:{id}} :{params:{id:string}}) {
  const user = await getUserById(id);
  
  
  return <ProfilePage user={user|| ""}/>
}
