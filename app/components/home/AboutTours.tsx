import React from 'react'
import Title from '../utils/Title'
import Image from 'next/image'
import p1 from '/public/image/p1.jpg'
import p2 from '/public/image/p2.jpg'
import p3 from '/public/image/p3.jpg'
import Link from 'next/link'
function AboutTours() {
  return (
    <div className='md:py-20 lg:py-0' id='About-Tours'>
        <Title text="EXCITING TOURS FOR ADVENTUROUS PEOPLE"/>
        <div className=' mt-10 lg:mt-16 flex flex-col  lg:flex-row'>
            <div className='flex w-full lg:w-1/2 me-20 flex-col mb-20 lg:mb-0 h-1/2'>
                <div className='p-5'>
                <p className='my-p mb-5'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</p>
                <p className='mb-5 text-sm'>amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent rhoncus dolor purus non enim praesent elementum facilisis leo elementum facilisis leo vel fringilla est</p>
                <p className='my-p mb-5'>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</p>
                <p className=' mb-10 text-sm'>Lorem ipsum dolor iente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</p>
                <Link href='#' className='hov3 text-3xl relative'>learn more <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className='w-full lg:w-1/2 relative py-20 h-1/2'>
            <Image src={p1.src} width={1000} height={300} className='absolute z-20 lg:left-1/4 lg:top-8 lg:w-80 p h-full w-1/2 left-0 md:w-1/3 md:h-56 -top-1/4 md:left-12' alt={''} />
            <Image src={p2.src} width={1000} height={300} className='absolute z-30 lg:top-24 lg:left-0 lg:w-80 p h-full w-1/2 left-1/4 md:w-1/3 md:h-56 -top-1/3 md:left-1/3' alt={''}/>
            <Image src={p3.src} width={1000} height={400} className='absolute -top-1/4 z-10 p md:w-1/3 h-full w-1/2 right-0 md:h-56 md:right-12 lg:right-2/4 lg:w-80  lg:top-0' alt={''}/>
            </div>
        </div>
    </div>
  )
}

export default AboutTours