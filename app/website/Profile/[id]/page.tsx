import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getUserByEmail } from "@/app/server/actions";
import Image from "next/image";
import EditProfile from "../../components/EditProfile";
export default async function Profile({
  params: { id },
}: {
  params: { id: string };
}) {
  const decodedEmail = decodeURIComponent(id);
  const user = await getUserByEmail(decodedEmail);
  return (
    <>
      <Navbar />
      <div className="font-serif relative max-w-md mx-auto md:max-w-2xl mt-28 p-15 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl ">
        <div className="px-6">
          <div className="flex items-center flex-wrap justify-center pt-10">
            <Image
              src={user?.image || ""}
              width="200"
              height="200"
              alt="Profile pic"
              className="rounded-lg"
            ></Image>
          </div>

          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {user?.name}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {user?.isMember ? "Member" : "Not a Member"}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  {user?.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfile
        email={decodedEmail}
        name={user?.name || ""}
        imageUrl={user?.image || ""}
        bio={user?.bio || ""}
      />
    </>
  );
}
