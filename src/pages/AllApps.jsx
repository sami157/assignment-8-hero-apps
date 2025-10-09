import React from 'react'
import Navbar from '../components/Navbar'
import CardGrid from '../components/CardGrid'
import Footer from '../components/Footer'
import Title from '../components/Title'

const AllApps = () => {
    return (
        <div className='mx-[80px]'>
            <Title></Title>
            <div className='flex justify-between my-[16px]'>
                <p className='text-[24px] font-semibold'>(132) Apps found</p>
                <p>Search box</p>
            </div>
            <CardGrid></CardGrid>
        </div>
    )
}

export default AllApps
