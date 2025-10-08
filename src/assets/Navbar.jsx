import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-white px-[80px] py-[16px] flex justify-between items-center shadow-sm'>
                <div className='flex gap-[4px] items-center'>
                    <img className='h-[40px]' src="src\assets\logo.png" alt="" />
                    <p className='text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</p>
                </div>
                <div className='flex font-medium gap-[32px]'>
                    <a href="">Home</a>
                    <a href="">Apps</a>
                    <a href="">Installation</a>
                </div>
                <div>
                    <button className='flex px-[16px] py-[12px] gap-[10px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm items-center'>
                        <img className='h-[20px]' src="src\assets\github.png" alt="" />
                        <p className='text-white font-semibold'>Contribute</ p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
