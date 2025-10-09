import React from 'react'

const InstalledAppCard = () => {
  return (
    <div className='w-full p-[16px] bg-white rounded-[8px] flex items-center justify-between'>
      <div className='flex gap-[16px] items-center'>
        <img className='w-[80px] rounded-[4px]' src="src\assets\error-404.png" alt="" />
        <div className='flex flex-col gap-[16px]'>
            <p className='text-[20px] font-medium'>App Name</p>
            <div className='flex gap-[16px]'>
                <div className='flex gap-[4px] items-center'>
                    <img className='w-[12px]' src="src\assets\download.png" alt="" />
                    <p className='text-[#00D390]'>9M</p>
                </div>
                <div className='flex gap-[4px] items-center'>
                    <img className='w-[12px]' src="src\assets\star.png" alt="" />
                    <p className='text-[#FF8811]'>5</p>
                </div>
                <p className='text-[#627382]'>258 MB</p>
            </div>
        </div>
      </div>
      <button className='text-center p-[12px] text-white bg-[#00D390] font-semibold rounded-[4px]'>Uninstall</button>
    </div>
  )
}

export default InstalledAppCard
