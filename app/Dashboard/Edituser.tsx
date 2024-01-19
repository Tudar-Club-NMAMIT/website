import React from 'react'
import { useState } from 'react'
import { updateUserfromDashboard } from '../server/actions'
type User={
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    isMember: boolean;
    bio: string | null;
    role: string;
  }
const Edituser = (para:{user:User}) => {
    const [name,setname] = useState(para.user.name)
    const [email,setemail] = useState(para.user.email)
    const [role,setrole] = useState(para.user.role)
    const [member, setmemeber] = useState(para.user.isMember);
    const [close, setclose] = useState(true);
    const handleSubmit = async () => {
        const update = await updateUserfromDashboard(para.user.id,name||"",email||"",role,member);
        setclose(true)
    }
    
  return (
    <>
    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" data-modal-target="crud-modal" data-modal-toggle="crud-modal" onClick={()=>setclose(false)}>edit</button>
    
<div id="crud-modal" onClick={()=>setclose(true)} tabIndex={-1} aria-hidden="true" className={` ${close? "hidden" : ""} z-10 overflow-y-auto text-left overflow-x-hidden absolute top-0 flex left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div onClick={(e) => {
      e.stopPropagation()}} className=" p-4 w-full max-w-md max-h-full z-20">
        <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Edit user
                </h3>
                <button type="button" onClick={()=>{setclose(true)}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" value={name||""} onChange={(e) =>setname(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required/>
                    </div>
                    <div className="col-span-2 ">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" value={email||""} onChange={(e) =>setemail(e.target.value)} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Membership</label>
                        <ul className="grid w-full gap-6 md:grid-cols-2">
                            <li>
                                <div onClick={()=>setmemeber(true)}  className={`flex items-center justify-between w-full p-2  border  rounded-lg cursor-pointer dark:hover:text-gray-300  ${member?"dark:text-blue-500 dark:border-2 dark:bg-gray-800 border-blue-600 text-blue-600":" border-gray-200 dark:border-gray-700 dark:text-gray-400 text-gray-500 bg-white dark:bg-gray-800"} hover:text-gray-600 hover:bg-gray-100  dark:hover:border-gray-200 dark:hover:border-2  dark:hover:bg-gray-700`}>                           
                                    <div className="flex justify-center w-full">
                                        <div className="w-full text-sm font-semibold">Member</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div  onClick={()=>setmemeber(false)}  className={`flex items-center justify-between w-full p-2  border  rounded-lg cursor-pointer dark:hover:text-gray-300  ${!member?"dark:text-blue-500 dark:border-2 dark:bg-gray-800 border-blue-600 text-blue-600":" border-gray-200 dark:border-gray-700 dark:text-gray-400 text-gray-500 bg-white dark:bg-gray-800"} hover:text-gray-600 hover:bg-gray-100  dark:hover:border-gray-200 dark:hover:border-2  dark:hover:bg-gray-700`}>
                                    <div className="flex justify-center w-full">
                                        <div className="w-full text-sm font-semibold">Not a member</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                        <input type="text" name="role" value={role||""} id="role" onChange={(e) =>setrole(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required/>
                    </div>
                </div>
                <button onClick={handleSubmit} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Update
                </button>
            </div>
        </div>
    </div>
</div> 

    
    </>

  )
}

export default Edituser
