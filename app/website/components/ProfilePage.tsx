import React from "react";

import { getUserByEmail } from "@/app/server/actions";

type UserProps = {
  user:
    | string
    | {
        isMember: boolean;
        image: string | null;
        name: string | null;
        bio: string | null;
      };
};

const ProfilePage = async (email: any) => {
  const user = await getUserByEmail(email);
  console.log(user);
  return (
    
    <>
     
    </>
  );
};

export default ProfilePage;
