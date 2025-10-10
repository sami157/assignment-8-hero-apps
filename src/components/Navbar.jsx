import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import guthib from "../assets/github.png";
const Navbar = () => {


    const navigateToGithub = () => {
  window.open("https://github.com/sami157", "_blank");
};

    return (
        <>
            <div className='bg-white px-[80px] py-[16px] flex justify-between items-center shadow-sm'>
                <Link to="/" className='flex gap-[4px] items-center'>
                  
                    <img className='h-[40px]' src="src\assets\logo.png" alt="" />
                    <p className='text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</p>
                  
                </Link>
                 <div className='flex font-medium gap-[32px]'>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-[#632EE3] font-semibold underline" : ""}
        >
          Home
        </NavLink>
        <NavLink 
          to="/all-apps" 
          className={({ isActive }) => isActive ? "text-[#632EE3] font-semibold underline" : ""}
        >
          Apps
        </NavLink>
        <NavLink 
          to="/installed" 
          className={({ isActive }) => isActive ? "text-[#632EE3] font-semibold underline" : ""}
        >
          Installation
        </NavLink>
      </div>

                <div>
                    <button onClick={navigateToGithub} className='flex px-[16px] py-[12px] gap-[10px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm items-center'>
                        <img className='h-[20px]' src={guthib} alt="" />
                        <p className='text-white font-semibold'>Contribute</ p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
