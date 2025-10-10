import React from 'react'
import Banner from './Banner'
import Title from './Title'
import CardGrid from './CardGrid'
import { useNavigate } from "react-router-dom";

const Body = () => {

   const navigate = useNavigate();

  const navigateToAllPage = () => {
    navigate("/all-apps");
  };
  return (
    <div>
      <Banner></Banner>
      <Title></Title>
      <div className='px-[80px]'>
       <CardGrid jsonfile="apps copy.json"></CardGrid>
      </div>
      
       <div className="flex justify-center items-center mt-6">
                    <button onClick={navigateToAllPage} className='flex px-[16px] py-[12px] gap-[10px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm items-center justify-center'>
                       
                        <p className='text-white font-semibold'>Show All</ p>
                    </button>
                </div>
      </div>
   
  )
}

export default Body
