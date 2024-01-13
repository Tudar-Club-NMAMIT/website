"use client"

import { uploadName } from '@/app/server/actions'
import React, { useState } from 'react'


function Testform() {
    const [name , setName] = useState("")
  return (
    <form onSubmit={async (e)=> {
        e.preventDefault()
        const data = await uploadName(name)
        alert(data.message)
        setName("")
    }}>
    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name"/>
    <button type= "submit">
      submit
    </button>
  </form>
  )
}

export default Testform