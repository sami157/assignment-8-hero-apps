import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="text-center mt-[80px] mb-[40px]">
      <p className="text-[48px] font-bold">{text1}</p>
      <p className="text-[#627382]">{text2}</p>
    </div>
  )
}

export default Title