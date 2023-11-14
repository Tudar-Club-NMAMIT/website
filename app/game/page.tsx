import React from 'react'
import Keyboard from './components/keyboard'
import Matchboard from './components/matchboard'
import Wordtobematched from './components/wordtobematched'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
    <Wordtobematched/>
    <Matchboard/>
    <Keyboard/>
    </>
  )
}

export default page