import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { getPosts } from "@/app/server/actions";
import Link from "next/link";
import Image from "next/image";
async function Blog() {
  const userData = await getPosts();
  const posts = userData[0].posts;
  console.log("pots:" + posts);
  return (
    <div>
      <Navbar />
      <section className="dark:bg-gray-800 dark:text-gray-100 pt-28">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs dark:text-gray-400">
                February 19, 2021
              </span>
              {/* <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p> */}
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-lg">
            {posts.map((post) => (
              <Link
                href={`Blog/${post.id}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 rounded-lg"
              >
                <Image
                  src={post.imageUrl}
                  width={500}
                  height={500}
                  alt="blog"
                  className="rounded-lg"
                ></Image>
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {post.title}
                  </h3>
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(post.createdAt)}

                  {/* <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p> */}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
