"use client";
import React from "react";
import Dashboard from "./Dashboard";
import { useSession } from "next-auth/react";
import AccessDenied from "./AccessDenied";
import { Session } from "inspector";
function page() {
  const { data: session, status } = useSession();

  return (
    <div>
      {session?.user?.email == "tudar@nmamit.in" ? (
        <Dashboard />
      ) : (
        <AccessDenied />
      )}
    </div>
  );
}

export default page;
