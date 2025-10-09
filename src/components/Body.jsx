import React from 'react'
import Banner from './Banner'
import Title from './Title'
import CardGrid from './CardGrid'

const Body = () => {
  return (
    <div>
      <Banner></Banner>
      <Title></Title>
      <div className='px-[80px]'>
        <CardGrid></CardGrid>
      </div>
    </div>
  )
}

export default Body
