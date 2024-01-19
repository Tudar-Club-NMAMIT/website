import React from 'react'
import { useState } from 'react'
import { updateEventsfromDashboard } from '../server/actions'
import { Datepicker } from 'flowbite-react';
type Event = {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    date: string;
    attendedBy: string | null;
    organizedBy: string | null;
    venue: string;
}
const getdates = (dateval:string) =>{
    const date = new Date(dateval);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
    
    return date.toLocaleDateString('en-US', options);
}


const EditEvent = (para:{event:Event}) => {
    const [title,settitle] = useState(para.event.title)
    const [venue,setvenue] = useState(para.event.venue)
    const [date,setdate] = useState(para.event.date)
    const [attendedby, setattendeby] = useState(para.event.attendedBy);
    const [close, setclose] = useState(true);
    const handleSubmit = async () => {
        const update = await updateEventsfromDashboard(para.event.id,title||"",attendedby||"",venue||"",date);
        setclose(true)
    }


    
  return (
    <>
    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" data-modal-target="crud-modal" data-modal-toggle="crud-modal" onClick={()=>setclose(false)}>edit</button>
    
<div id="crud-modal" onClick={()=>setclose(true)} tabIndex={-1} aria-hidden="true" className={` ${close? "hidden" : ""} z-10 overflow-y-auto text-left overflow-x-hidden absolute top-0 flex left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div onClick={(e) => {
      e.stopPropagation()}} className=" p-4 w-full max-w-md h-auto">
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
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" value={title||""} onChange={(e) =>settitle(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required/>
                    </div>
                    <div className="col-span-2 ">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Venue</label>
                        <input type="email" value={venue||""} onChange={(e) =>setvenue(e.target.value)} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required/>
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <div>   
                            <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attended By</label>
                        <input type="number" name="role" value={attendedby||""} id="role" onChange={(e) =>setattendeby(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required/>
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

export default EditEvent
