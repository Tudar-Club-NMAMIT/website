import React, { ChangeEvent, useEffect, useState } from "react";
import { registerMember } from "../server/actions";
import { branches } from "../utils/constants";
import Image from "next/image";
import { Select } from "@radix-ui/themes";

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

const RegistrationForm = ({ user }: { user: User }) => {
  const [usn, setUsn] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [branch, setBranch] = useState<string>("temp");

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("image")) {
      alert("Please upload an image");
    }
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      alert("File size exceeds 1MB. Please choose a smaller file.");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
    };
  };

  useEffect(() => {
    const email = user.email;
    // extract usn from email
    if (email) setUsn(email.split("@")[0].toUpperCase());

    // extract year from email //TODO: the conditions are hardcoded for this year, please make the logic dynamic
    if (usn[1] === "U") setYear(1);
    else {
      if (usn[4] === "3") setYear(2);
      else if (usn[4] === "2") setYear(3);
      else setYear(4);

      // extract branch from email
      setBranch(branches[(usn[5] + usn[6]) as keyof typeof branches]);
    }
    // set name and image url from the user object
    setName(user.name as string);
    setImage(user.image as string);
    if (branch === undefined) setBranch(branches.AD);
    console.log(branch);
  }, [user, usn, branch]);

  const email = user?.email || "";
  const [name, setName] = useState<string>(user?.name as string);
  const [image, setImage] = useState<string>(user?.image as string);

  const handleSubmit = async () => {
    if (year < 1 || year > 4) {
      setYear(1);
      alert("Enter a valid year!");
      return;
    }
    console.log("Branch : " + branch);
    if (branch === undefined) setBranch(branches.AD);
    const res = await registerMember(email, name, usn, year, branch || "");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col relative gap-8 max-w-[100svw]  overflow-y-scroll py-8 p-4"
      style={{ scrollbarWidth: "none" }}
    >
      <h1 className="text-3xl font-bold text-center underline">
        Registration Form
      </h1>
      <div className="w-full flex flex-col gap-2">
        <h2>Profile Image</h2>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="blog-image"
            className="flex invert sm:invert-0 flex-col items-center justify-center px-4 md:w-full md:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-black/20   dark:border-gray-600 dark:hover:border-gray-500 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {image && (
                <div className="h-full">
                  <Image
                    src={image}
                    className=""
                    alt="image"
                    width={150}
                    height={150}
                  />
                </div>
              )}
            </div>
            <input
              id="blog-image"
              type="file"
              className="hidden"
              onChange={handleChangeImage}
            />
          </label>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className=" font-mono border-black/50 focus:bg-white/10 border-2 rounded-md pl-3 text-sm py-2"
          required
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <h2>Email</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={email}
          className="font-mono text-black/30 border-black/20 border-2 rounded-md pl-3 text-sm py-2"
          disabled
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <h2>USN</h2>
        <input
          type="text"
          name="usn"
          placeholder="USN"
          defaultValue={usn}
          value={usn}
          onChange={(e) => {
            setUsn(e.target.value);
          }}
          className="font-mono text-black/30 border-black/20 border-2 rounded-md pl-3 text-sm py-2"
          disabled
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <h2>Branch</h2>
        <select
          name="branch"
          placeholder="Branch"
          value={branch}
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          className=" font-mono border-black/50 focus:bg-white/10 border-2 rounded-md pl-3 text-sm py-2 overflow-x-hidden"
        >
          {Object.values(branches).map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h2>Year</h2>
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={year}
          onChange={(e) => {
            setYear(parseInt(e.target.value));
          }}
          className="font-mono border-black/50 focus:bg-white/10 border-2 rounded-md pl-3 text-sm py-2"
        />
      </div>

      <button
        type="submit"
        className="invert sm:invert-0 bg-green-700 px-4 py-2 text-white rounded-md"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
