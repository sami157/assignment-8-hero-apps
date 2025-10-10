import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Banner = () => {
   const navigateToGoogleplaystore = () => {
  window.open("https://play.google.com/store/games?hl=en&pli=1", "_blank");
};
 const navigateToappstore = () => {
  window.open("https://www.apple.com/app-store/", "_blank");
};
  return (
    <div className='flex flex-col mx-auto pt-[80px] text-center items-center'>  
    <div className='w-3/5 mx-auto'>
        <div className='w-[60%] mx-auto text-[72px] font-bold'>We Build <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</div>
      <div>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</div>
    </div> 
    <div className='flex gap-[16px] my-[40px]'>
        <button onClick={navigateToGoogleplaystore} className='flex gap-[10px] px-[24px] py-[12px] border-gray-300 border-1 items-center rounded-[8px]'>
            <img className='w-[32px]' src="src\assets\google-play.png" alt="" />
            <p className='font-bold'>Google Play</p>
        </button>
        <button onClick={navigateToappstore} className='flex gap-[10px] px-[24px] py-[12px] border-gray-300 border-1 items-center rounded-[8px]'>
            <img className='w-[32px]' src="src\assets\app-store.png" alt="" />
            <p className='font-bold'>App Store</p>
        </button>
      </div>
      <img className='w-1/2 mx-auto' src="src\assets\hero.png" alt="" />
      <div className='w-full text-white text-center py-[80px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
        <p className='text-[48px] font-bold mb-[40px]'>Trusted by Millions, Built for You</p>
        <div className='flex px-[183px] mx-auto gap-[24px] justify-center'>
            <div className='px-[70px] py-[40px] flex flex-col gap-[16px]'>
                <p>Total Downloads</p>
                <p className='text-[64px] font-bold'>29.6M</p>
                <p>21% more than last month</p>
            </div>
            <div className='px-[70px] py-[40px] flex flex-col gap-[16px]'>
                <p>Total Reviews</p>
                <p className='text-[64px] font-bold'>906k</p>
                <p>46% more than last month</p>
            </div>
            <div className='px-[70px] py-[40px] flex flex-col gap-[16px]'>
                <p>Active Apps</p>
                <p className='text-[64px] font-bold'>132+</p>
                <p>31 more will launch</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
