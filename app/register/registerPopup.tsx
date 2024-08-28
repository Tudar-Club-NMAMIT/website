// components/FloatingCard.tsx

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { getUserByEmail } from "../server/actions";
import { Role } from "@prisma/client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

type User = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  isMember: boolean;
  bio: string | null;
  role: Role;
  usn: string | null;
  year: number | null;
  branch: string | null;
};

const RegisterPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { data: session } = useSession();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserByEmail(session?.user?.email || "");
      setUser(user as User);
    };
    getUser();
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // 1/2 seconds delay

    return () => clearTimeout(timer);
  }, [session]);

  return (
    <div
      className={`transition-opacity max-w-[300px] fixed bottom-4 mx-4 sm:mx-5 z-[200]  duration-500 ease-in-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } fixed bottom-5 p-4 bg-white shadow-lg rounded-lg`}
    >
      <div
        className="w-6 h-6 absolute right-1  top-1 hover:w-7 hover:h-7"
        onClick={() => setVisible(false)}
      >
        <IoIosCloseCircle className="text-black/30 w-full h-fit" />
      </div>
      {user?.isMember ? (
        <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-lg text-black font-sans font-semibold text-center px-2">
            You are a registered as the member of Tudar Club!
          </h3>
          <button
            type="button"
            className=" mb-2 w-fit h-10 flex gap-2 justify-center items-center rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            onClick={() => {
              // TODO: Change the below link
              window.open("https://chat.whatsapp.com/ELyNxjFxOlO7RuzbsskuTs");
            }}
          >
            <FaWhatsapp className="w-fit h-full" />
            <p className="font-sans">Join the Group</p>
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-lg text-black font-sans font-semibold text-center px-2">
            Registrations for the year 2024-25 is open!
          </h3>
          <Link
            href="/register"
            className="text-white w-fit font-sans font-bold bg-green-600 py-2 px-4 rounded-md"
          >
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default RegisterPopup;
