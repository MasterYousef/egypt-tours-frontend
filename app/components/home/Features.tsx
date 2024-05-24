import Image from 'next/image'
import React from 'react'
import im from '/public/image/h2.jpg'
import FeaturesCard from './FeaturesCard'
function Features() {
  return (
    <div className=' w-full my-40 relative flex justify-center items-center py-10'>
      <div className='w-full bg-yellow-300 opacity-70 h-full absolute z-10 img-clip2' ></div>
        <Image src={im.src} width={1000} height={1000} className='w-full h-full img-clip2 absolute' alt={''} />
        <div className='z-10 flex flex-col lg:flex-row justify-evenly items-center my-10'>
          <FeaturesCard icon='fa-solid fa-globe' head='Explore the world' 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'/>
                    <FeaturesCard icon='fa-solid fa-compass' head='Meet nature' 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'/>
                    <FeaturesCard icon='fa-regular fa-map' head='Find your way' 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'/>
                    <FeaturesCard icon='fa-regular fa-heart' head='Live a healthier life' 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'/>
        </div>
    </div>
  )
}

export default Features