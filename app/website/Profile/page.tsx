"use client";
import React from "react";

import { useSession } from "next-auth/react";
import { getCurrentUser } from "@/app/server/actions";
import ProfilePage from "../components/ProfilePage";
export default async function Profile() {
  const { data: session, status } = useSession();
  const user = await getCurrentUser(session?.user?.email || "");
  return <h1>dhddh</h1>;
}
