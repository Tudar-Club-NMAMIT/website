"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserByEmail } from "../server/actions";
import RegistrationForm from "./registrationForm";
import Loader from "../website/components/Loader/Loader";
import SignInWithGoogleButton from "../website/components/SignInWithGoogleButton/SignInWithGoogleButton";
import CantBeMember from "./cantBeMember";

type User = {
  id: string;
  name: string | null;
  image: string | null;
  email: string | null;
  usn: string | null;
  year: number | null;
  branch: string | null;
  isMember: boolean;
  bio: string | null;
  role: string;
};

const RegisterPage = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      // action that calls the prisma function and returns the user based on session.email
      const user = await getUserByEmail(session?.user?.email || "");
      setUser(user);
    };
    getUser();
  }, [session]);

  if (status == "loading")
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <Loader />
      </div>
    );
  else if (!user) {
    return (
      <div className="flex flex-col justify-center gap-4 h-full items-center p-4">
        <h1 className="text-3xl  font-bold text-center md:w-2/3">
          Registrations Open for Tudar Club
        </h1>
        <p className="font-sans text-center w-4/5 text-opacity-50 ">
          Sign in with your <strong>NMAMIT Email ID</strong>
        </p>
        <SignInWithGoogleButton />
      </div>
    );
  }

  // if email does not end with @nmamit.in
  else if (!user.email?.endsWith("@nmamit.in")) {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <CantBeMember />
      </div>
    );
  }

  // else if user is not a member
  else if (!user.isMember) {
    return (
      <div className="w-full h-full flex justify-center">
        <RegistrationForm user={user} />
      </div>
    );
  }

  // TODO: else display user is already registerd and whatsapp group link

  if (user?.isMember) {
    return (
      <h1 className="w-full h-screen pt-20 flex justify-center items-center">
        Already registered
      </h1>
    );
  }
};

export default RegisterPage;
