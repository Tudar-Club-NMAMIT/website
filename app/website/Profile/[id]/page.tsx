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
    <div className="bg-black h-screen pt-20 flex flex-col justify-center">
      <div className="px-2 font-serif relative max-w-md mx-auto md:max-w-2xl p-15 min-w-0 break-wordsw-full sshadow-lg rounded-xl ">
        <div className="px-6 rounded-md bg-white/10 border-2 border-white/20">
          <div className="flex items-center flex-wrap justify-center pt-10">
            <Image
              src={user?.image || ""}
              width={200}
              height={200}
              alt="Profile pic"
              className="rounded-lg max-h-[200px] object-cover"
            ></Image>
          </div>

          <div className="text-center mt-2">
            <h3 className="text-2xl text-white font-bold leading-normal mb-1">
              {user?.name}

              {user?.usn && (
                <div
                  className={`text-xs mt-0 mb-2 text-opacity-50 text-white font-bold uppercase`}
                >
                  {user?.usn}
                </div>
              )}
            </h3>
            <div
              className={`text-xs mt-0 mb-2 ${
                user?.role == "MEMBER"
                  ? "text-green-600"
                  : user?.role == "ADMIN"
                  ? "text-yellow-600"
                  : "text-slate-400"
              } font-bold uppercase`}
            >
              {user?.role}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-white/30 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-200 mb-4">
                  &lsquo; {user?.bio} &rsquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <EditProfile
          email={decodedEmail}
          name={user?.name || ""}
          usn={user?.usn || null}
          year={user?.year || 1}
          imageUrl={user?.image || ""}
          bio={user?.bio || ""}
        />
      </div>
    </div>
  );
}
