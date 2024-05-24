import React from 'react'

type props = {
  icon:string,
  text:string,
  head:string
}
function FeaturesCard({icon,head,text}:props) {
  return (
    <div className='flex flex-col my-5 p-5 justify-center items-center opacity-80 main rounded Features-Card mx-5 hover:-translate-y-7 ease-in-out duration-300'>
        <i className={`${icon} text-7xl my-5 title`}></i>
        <p className='mb-5 text-gray-500 font-bold text-md'>{head}</p>
        <p className='mb-5 text-center text-gray-500'>{text}</p>
    </div>
  )
}

export default FeaturesCard