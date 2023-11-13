import React from 'react'
import Keyboard from './components/keyboard'
import Matchboard from './components/matchboard'
import Wordtobematched from './components/wordtobematched'

const page = () => {
  return (
    <>
    <Wordtobematched/>
    <Matchboard/>
    <Keyboard/>
    </>
  )
}

export default page