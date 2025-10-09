import React from 'react'

const AppCard = () => {
  return (
    <div className='flex flex-col gap-[16px] bg-white rounded-[16px] p-[16px] drop-shadow-2xl drop-shadow-gray-300'>
        <img className='w-full rounded-[16px]' src="src\assets\App-Error.png" alt="" />
        <p className='text-[20px] font-medium'>App Name</p>
        <div className='flex justify-between'>
            <div className='flex px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center bg-[#F1F5E8]'>
                <img className='w-[12px]' src="src\assets\download.png" alt="" />
                <p className='text-[#00D390]'>9M</p>
            </div>
            <div className='flex px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center bg-[#FFF0E1]'>
                <img className='w-[16px] h-[16px]' src="src\assets\star.png" alt="" />
                <p className='text-[#FF8811]'>5</p>
            </div>
        </div>
    </div>
  )
}

export default AppCard
