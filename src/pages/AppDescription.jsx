import React from 'react'

const AppDescription = () => {
  return (
    <div className='p-[80px] flex flex-col gap-[80px]'>
        <div className='flex gap-[40px]'>
            <img className='w-[350px]' src="src/assets/app-store.png" alt="" />
            <div>
                <div className='mb-[30px]'>
                    <p className='text-[32px] font-bold'>App Name</p>
                    <p className='text-[#627382]'>Developed by <span className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>company</span></p>
                </div>
                <div className='mt-[30px] flex gap-[60px]'>
                    <div>
                        <img className='w-[40px]' src="src/assets/download2.png" alt="" />
                        <p className='text-[#001931]'>Downloads</p>
                        <p className='text-[40px] font-extrabold'>8M</p>
                    </div>
                    <div>
                        <img className='w-[40px]' src="src/assets/star.png" alt="" />
                        <p className='text-[#001931]'>Average Ratings</p>
                        <p className='text-[40px] font-extrabold'>4.8</p>
                    </div>
                    <div>
                        <img className='w-[40px]' src="src/assets/review.png" alt="" />
                        <p className='text-[#001931]'>Total Reviews</p>
                        <p className='text-[40px] font-extrabold'>54k</p>
                    </div>
                </div>
                <button className='bg-[#00D390] rounded-[4px] text-white font-semibold px-[20px] py-[14px] mt-[30px]'>
                    <p>Install Now (291 MB)</p>
                </button>
            </div>
        </div>
        <div>
            CHART GOES HERE
        </div>
        <div>
            <p className='text-[24px] font-semibold mb-[24px]'>Description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis at accusamus facilis eos quam porro, eum accusantium vitae molestiae blanditiis provident inventore aut! Voluptatum voluptatem blanditiis ab provident fugit odio.</p>
        </div>
    </div>
  )
}

export default AppDescription
