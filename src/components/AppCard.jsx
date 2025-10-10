
import React from 'react';

import stree from "../assets/star.png";
import dnd from "../assets/download.png";

const AppCard = ({ image, title, downloads, rating }) => {

  
  

  return (
    
    <div className='flex h-[400px] flex-col gap-[16px] bg-white rounded-[16px] p-[16px] drop-shadow-2xl drop-shadow-gray-300 justify-between'>
        <img className='w-full h-3/4 rounded-[16px] object-cover' src={image} alt="" onError={(e) => { e.currentTarget.src = "src/assets/hero.png"; }}  />
        <div className='flex flex-col gap-[16px]'>
        <p className='text-[20px] font-medium'>{title}</p>
        <div className='flex justify-between'>
            <div className='flex px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center bg-[#F1F5E8]'>
                <img className='w-[12px]' src={dnd} alt="" />
                <p className='text-[#00D390]'>{(downloads / 1_000_000).toFixed(0)}M+</p>
            </div>
            <div className='flex px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center bg-[#FFF0E1]'>
                <img className='w-[16px] h-[16px]' src={stree} alt="" />
                <p className='text-[#FF8811]'>{rating}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AppCard
