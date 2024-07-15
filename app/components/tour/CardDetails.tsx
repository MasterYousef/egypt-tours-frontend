"use client"
import { oneTour } from "@/types/types"
import Slider from "./Slider"

function CardDetails({tour}:{tour:oneTour}) {
    const date = tour.start
    .replace("T00:00:00.000Z", "")
    .split("-")
    .reverse()
    .join("-");
  return (
    <div className="flex justify-between flex-wrap lg:h-96 w-full my-10 bg-white rounded ">
    <Slider images={tour.images} />
    <div className="flex flex-wrap lg:justify-center w-full h-1/2 lg:h-full lg:w-1/2 p-10 relative">
    <div className="w-full h-1/3 lg:w-1/2 lg:h-5/6 flex justify-evenly items-start flex-col">
    <div>
        <i className="fa-solid fa-users text-2xl"></i> 
        <span className="text-md lg:text-xl mx-2">up to {tour.maxPeople} people</span>
      </div>
      <div>
      <i className="fa-regular fa-calendar text-2xl"></i> 
        <span className="text-md lg:text-xl mx-2">start: {date}</span>
      </div>
      <div>
        <i className="fa-solid fa-coins text-2xl"></i>
        <span className="text-md lg:text-xl mx-2">only ${tour.price}</span>
      </div>
    </div>
    <div className="w-full h-1/3 lg:w-1/2 lg:h-5/6 flex justify-evenly items-start flex-col">
      <div>
        <i className="fa-solid fa-hourglass-end text-2xl"></i>
        <span className="text-md lg:text-xl mx-2">{tour.duration} days tour</span>
      </div>
      <div>
      <i className="fa-solid fa-person-chalkboard text-2xl"></i> 
        <span className="text-md lg:text-xl mx-2">{tour.guides} guides in tour</span>
      </div>
      <div>
        <i className="fa-solid fa-circle-check text-2xl"></i>
        <span className="text-md lg:text-xl mx-2">{tour.people} tour bookings</span>
      </div>
    </div>
    <button className="p-2 hov3 absolute top-2 right-2">Add coupon</button>
    <button className="p-2 mt-1 btn">Book Now</button>
    </div>
  </div>
  )
}

export default CardDetails