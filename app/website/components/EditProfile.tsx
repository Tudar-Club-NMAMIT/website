"use client";
import React, { use } from "react";
import { useState } from "react";
import { ChangeEvent } from "react";
import Image from "next/image";
import { updateUserProfile } from "@/app/server/actions";
import { useSession } from "next-auth/react";
import SignOut from "./SignOut";
const EditProfile = (param: {
  email: string;
  name: string;
  imageUrl: string;
  bio: string;
}) => {
  const { data: session, status } = useSession();
  const [hidden, setHidden] = useState(true);
  const [username, setUsername] = useState(param.name);
  const [bio, setBio] = useState(param.bio);
  const [image, setImage] = useState(param.imageUrl);
  const [submitting, setSubmitting] = useState(false);
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
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    if (!image || !username || !bio) return;
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: image }),
      });
      const data = await response.json();
      const imageUrl = data.data.url;
      if (imageUrl) {
        const res = await updateUserProfile(image, username, bio, param.email);
        setImage("");
        setUsername("");
        setBio("");
        setHidden(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {session?.user?.email == param.email && (
          <div className="flex justify-center items-center gap-10 m-7">
            {" "}
            <button
              onClick={() => setHidden(false)}
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              className="block text-black focus:ring-4 focus:outline-none bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
            >
              Edit Profile
            </button>
            <SignOut />{" "}
          </div>
        )}

        <div
          id="crud-modal"
          aria-hidden="true"
          className={` ${
            hidden ? "hidden" : " "
          } flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative p-4 w-full max-w-md mt-40 z-20">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Edit Your Profile
                </h3>
                <button
                  type="button"
                  onClick={() => setHidden(true)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>

                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="md:p-5" onSubmit={handleSubmit}>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Profile Image
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="blog-image"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                <div className="grid gap-4 mb-4 grid-cols-2 mt-4">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your username"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Bio
                    </label>
                    <textarea
                      id="description"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your bio"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-500 inline-flex items-center focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {submitting ? "Updating..." : "Update"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
