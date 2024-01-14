"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '../website/components/Navbar/Navbar';
const page = () => {
    const {data:session} = useSession();
  return (
    <Navbar/>
  )
}

export default page