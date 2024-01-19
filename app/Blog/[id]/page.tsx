import React from "react";
import { getPostById } from "@/app/server/actions";
import Image from "next/image";
import Link from "next/link";
const page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPostById(id);
  console.log("post" + post);
  return (
    // <div className="flex-col justify-center items-center h-screen">
    //   <Image
    //     src={post?.imageUrl || ""}
    //     height={400}
    //     width={200}
    //     alt="Blog"
    //   ></Image>
    //   <h2>{post?.title}</h2>
    //   <h2>{post?.reference}</h2>
    //   <h2>{post?.createdBy}</h2>
    // </div>
    <main className=" font-sans pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-center px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <Image
                  className="mr-4 w-16 h-16 rounded-full"
                  width={50}
                  height={64}
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/xczsl6fzq0clalmthj6f"
                  alt="Tudar"
                />
                <div>
                  <Link
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white">
                    {post?.createdBy}
                  </Link>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      February 8th, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {post?.title}
            </h1>
          </header>
          <figure>
            <Image width={670} height={500} src={post?.imageUrl || ""} alt="" />
          </figure>
          <p className="text-xl md:text-2xl mt-8 text-justify w-auto">
            {post?.content}
          </p>
        </article>
      </div>
    </main>
  );
};

export default page;
