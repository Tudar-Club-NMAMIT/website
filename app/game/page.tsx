import React from 'react'
import Keyboard from './components/Jumbled'
import Matchboard from './components/Matched'
import Wordtobematched from './components/wordtobematched'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <>
    <Navbar />
    <Wordtobematched/>
    <Matchboard/>
    <Keyboard/>
    </>
  )
}

export default page