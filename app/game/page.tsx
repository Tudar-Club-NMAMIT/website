import React from 'react'
import Keyboard from './components/Jumbled'
import Matchboard from './components/Matched'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <>
    <Navbar />
    <Matchboard/>
    <Keyboard/>
    </>
  )
}

export default page