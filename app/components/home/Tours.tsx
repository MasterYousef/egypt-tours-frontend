import React from 'react'
import Title from '../utils/Title'
import TourCard from '../tours/TourCard'
import Link from 'next/link'
import getToursAction from '@/actions/getToursAction'
import { tourResponse } from '@/types/types'

async function Tours({user}:{user?:string}) {
  const {data} = await getToursAction(3) as tourResponse
  if(data){
    return (
      <div className={`flex flex-col justify-center items-center`}>
          <Title text='MOST POPULAR TOURS'/>
          <div className='flex flex-col md:flex-row justify-evenly items-center per mt-20 w-full'>
            {data.map(tour => <TourCard tour={tour}/>)}
          </div>
          {
            user === "admin" ? <Link href='Admin-Tours' className='my-16 btn text-xl p-1'>Discover all tours</Link> : <Link href='All-Tours' className='my-16 btn text-xl p-1'>Discover all tours</Link>
          }
      </div>
    )
  }else{
    return null
  }

}

export default Tours