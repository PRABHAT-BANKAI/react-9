import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const Allroutes = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default Allroutes