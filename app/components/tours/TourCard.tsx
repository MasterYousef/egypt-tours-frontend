import Image from 'next/image'
import React from 'react'
import '@/style/tour.css'
import im from '/public/image/h2.jpg'
import Link from 'next/link'
function TourCard() {
  return (
    <div className='tour-card relative  mb-48 md:mb-0'>
    <div className='shadow-lg flex flex-col justify-center h-full items-center absolute bg-white md:rounded z-10 card-front w-full overflow-hidden pb-10 '>
        <Image src={im.src} width={1000} height={1000} className=' w-full h-64 card-im' alt={''}/>
        <div className='card-head font-bold md:text-2xl lg:text-3xl  rounded p-3 top-32'>
            Egypt Place
        </div>
        <div className=' w-3/4 p-3 text-center h-3/4 text-sm pb-12 md:pb-1'>
        <p className=' border-b text-gray-500 my-3 pb-3'>3 day tours</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>Up to 30 people</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>2 tour guides</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>Sleep in cozy hotels</p>
        <p className=' text-gray-500 my-3 pb-3'>Difficulty: easy</p>
        </div>
    </div>
    <div className='card-back absolute  h-56 w-full md:h-full -bottom-1/3 md:-bottom-0 flex flex-col justify-center items-center rounded  md:z-0 z-20'>
    <p className=' font-medium md:text-2xl mt-14  md:mb-10 uppercase'>only</p>
    <p className='md:mb-20 my-5 text-4xl font'>$260</p>
    <Link href='#' className=' hov2 hover:scale-110 md:text-3xl p-3 mb-3 font-bold'>Book Now!</Link>
    </div>
    </div>
  )
}

export default TourCard