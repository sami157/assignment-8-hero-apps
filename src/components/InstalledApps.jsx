import React from 'react'
import InstalledAppCard from './InstalledAppCard'
import Title from './Title'

const InstalledApps = () => {


    
    return (
        <div className='mx-[80px]'>
            <Title></Title>
            <div className='flex justify-between my-[16px]'>
                <p className='text-[24px] font-semibold'>(2) Apps found</p>
                <p>Sort Dialog</p>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <InstalledAppCard></InstalledAppCard>
                <InstalledAppCard></InstalledAppCard>
            </div>
        </div>
    )
}

export default InstalledApps
