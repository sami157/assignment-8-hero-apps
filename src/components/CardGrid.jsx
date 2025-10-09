import React from 'react'
import AppCard from './AppCard'

const CardGrid = () => {
  return (
    <div className='grid grid-cols-4 gap-[16px] justify-center mb-[40px]'>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
    </div>
  )
}

export default CardGrid
