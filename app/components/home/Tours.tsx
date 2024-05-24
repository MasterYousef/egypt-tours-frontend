import React from 'react'
import Title from '../utils/Title'
import TourCard from '../tours/TourCard'
import Link from 'next/link'

async function Tours() {
  return (
    <div className={`flex flex-col justify-center items-center`}>
        <Title text='MOST POPULAR TOURS'/>
        <div className='flex flex-col md:flex-row justify-evenly items-center per mt-20 w-full'>
          <TourCard/>
          <TourCard/>
          <TourCard/>
        </div>
        <Link href='All-Tours' className='my-16 btn text-xl'>Discover all tours</Link>
    </div>
  )
}

export default Tours