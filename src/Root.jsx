import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import { Outlet } from 'react-router'

function Root() {

  return (
    <div className='bg-[#F5F5F5] min-h-[1000px]'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root