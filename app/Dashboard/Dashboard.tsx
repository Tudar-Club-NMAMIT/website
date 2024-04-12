'use client'
import React,  { MouseEventHandler, use }  from "react";
import Link from "next/link";
import Image from "next/image";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Edituser from "./Edituser";
import Editblog from "./Editblog";
import EditEvent from "./EditEvent";
import { useState, useEffect } from "react";
import { getUsers, getPosts, getEvents } from "../server/actions";

type Users={
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  isMember: boolean;
  bio: string | null;
  role: string;
}[]
type Events = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  attendedBy: string | null;
  organizedBy: string | null;
  venue: string;
}[]
type Blogs = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  reference: string | null;
  createdBy: string;
  credits: string | null;
  createdAt: Date;
  authorId: string | null;
  show: boolean;
}[]
const Dashboard = () => {
  const [tabflag, settabflag] = useState(0)


  const initialvalue_users:Users = [{
    id:" ",
    name: "-",
    email: "-",
    emailVerified: "" as unknown as Date,
    image: "",
    isMember: true,
    bio: "",
    role: "-"}]
    const initialvalue_blogs:Blogs = [{
      id: "",
        title: "-",
        content: "",
        imageUrl: "",
        reference: "",
        createdBy: "",
        credits: "",
        createdAt: 23  as unknown as Date,
        authorId: "",
        show: true
    }]
   
  const initialvalue_events:Events = [{
    id: "",
    title: "-",
    imageUrl: "",
    description: "",
    date: "-",
    attendedBy: "-",
    organizedBy: "-",
    venue: "",
  }]



  const [users,setusers] = useState(initialvalue_users)
  const [blogs,setblogs] = useState(initialvalue_blogs)
  const [events,setevents] = useState(initialvalue_events)

  useEffect(() =>{
    const getuser = async() => {
      const usersdata = await getUsers()
      setusers(usersdata)
    }
    const getposts = async() => {
      const postsdata = await getPosts()
      const posts = postsdata[0].posts
      setblogs(posts)
    }
    const getevents = async() => {
      const evenstsdata = await getEvents();  
      setevents(evenstsdata)
    }
    getuser();
    getposts();
    getevents();
  },[])
  return (
    <div className="font-sans z-50">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >

        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/Dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            
            <li>
              <Link
                href="/EventForm"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Add Events
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/BlogForm"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Add Blogs</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <ul
            className="flex flex-wrap text-sm pb-5 font-medium text-center text-gray-500 dark:text-gray-400 "
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
              onClick={()=>settabflag(0)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${tabflag === 0 ? "text-blue-300 bg-gray-50 dark:bg-gray-800":"hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
                id="user-tab"
                data-tabs-target="#user"
                type="button"
                role="tab"
                aria-controls="user"
                aria-selected="false"
              >
                Users
              </button>
            </li>

            <li className="me-2" role="presentation">
              <button
                onClick={()=>settabflag(1)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${tabflag === 1 ? "text-blue-300 bg-gray-50 dark:bg-gray-800":"hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} `}
                id="blog-tab"
                data-tabs-target="#blog"
                type="button"
                role="tab"
                aria-controls="blog"
                aria-selected="false"
              >
                Blogs
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={()=>settabflag(2)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${tabflag === 2 ? "text-blue-300 bg-gray-50 dark:bg-gray-800":"hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
                id="event-tab"
                data-tabs-target="#event"
                type="button"
                role="tab"
                aria-controls="event"
                aria-selected="false"
              >
                Events
              </button>
            </li>
          </ul>

          <div id="default-tab-content">
            {/* users */}
            <div
              className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${tabflag === 0 ? "" : "hidden"}`}
              id="user"
              role="tabpanel"
              aria-labelledby="user-tab"
            >
              <div className="overflow-x-auto shadow-md sm:rounded-lg table-auto w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Users
                    {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                  </caption>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Member
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={user.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {user.name}
                        </th>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">
                          {user.isMember ? "Yes" : "No"}
                        </td>
                        <td className="px-6 py-4">{user.role}</td>
                        <td className="px-6 py-4 text-right">
                          <Edituser user={user}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Blog */}
            <div
              className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${tabflag === 1 ? "" : "hidden"}`}
              id="blogs"
              role="tabpanel"
              aria-labelledby="blog-tab">
              <div className="overflow-x-auto shadow-md sm:rounded-lg table-auto w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Blogs
                    {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                  </caption>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Author
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Show
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={blog.id}
                      >
                        
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {blog.title}
                        </th>
                        <td className="px-6 py-4">
                          <Image src={blog.imageUrl} width={1000} height={1000} alt="err" className="hover:scale-150 w-16 h-12"></Image>
                          </td>
                        <td className="px-6 py-4">{blog.createdBy}</td>
                        <td className="px-6 py-4">
                          {blog.show? <IoEyeOutline size={30} />: <IoEyeOffOutline size={30}/>}
                          
                        </td>
                        <td className="px-6 py-4">
                          <Editblog blog={blog}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>







            </div>
            {/* Events */}
            <div
              className={`${tabflag === 2 ? "" : "hidden"} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
              id="events"
              role="tabpanel"
              aria-labelledby="event-tab"
            >
              <div className="overflow-x-auto shadow-md sm:rounded-lg table-auto w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Events
                    {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                  </caption>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Poster
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Organised by
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Attended by
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Venue
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={event.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {event.title}
                        </th>
                        <td className="px-6 py-4">
                        <Image src={event.imageUrl} width={1000} height={1000} alt="err" className="hover:scale-150 w-16 h-12"></Image>
                        </td>
                        <td className="px-6 py-4">
                          {event.date}
                        </td>
                        <td className="px-6 py-4">{event.organizedBy}</td>
                        <td className="px-6 py-4">{event.attendedBy|| 0}</td>

                        <td className="px-6 py-4">{event.venue}</td>

                        <td className="px-6 py-4 text-right">
                          <EditEvent event={event}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
