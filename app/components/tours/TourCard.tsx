import Image from "next/image";
import React, { ReactNode } from "react";
import "@/style/tour.css";
import Link from "next/link";
import { oneTour } from "@/types/types";
import rate from "../utils/rate";
function TourCard({ tour }: { tour: oneTour }) {

  const date = tour.start
    .replace("T00:00:00.000Z", "")
    .split("-")
    .reverse()
    .join("-");
  return (
    <div className="tour-card relative  mb-48 md:mb-5 mx-3">
      <div className="shadow-lg flex flex-col justify-center h-full items-center absolute bg-white md:rounded z-10 card-front w-full overflow-hidden pb-10 ">
        <Image
          src={tour.imageCover}
          width={1000}
          height={1000}
          className=" w-full h-64 card-im"
          alt={""}
        />
        <div className="card-head text-center font-bold md:text-xl lg:text-2xl  rounded p-3 top-32">
          {tour.title}
        </div>
        <div className=" w-3/4 p-3 text-center h-3/4 text-sm pb-12 md:pb-1">
          <p className=" border-b text-gray-500 my-3 pb-3">
            {tour.duration} day tour
          </p>
          <p className=" border-b text-gray-500 my-3 pb-3">
            Up to {tour.maxPeople} people
          </p>
          <p className=" border-b text-gray-500 my-3 pb-3">
            {tour.guides} tour guides
          </p>
          <p className=" border-b text-gray-500 my-3 pb-3">start in {date}</p>
          {tour.ratingsAverage ? (
          <div className=" border-b text-gray-500 my-3 pb-3">
            rate:{rate(tour.ratingsAverage)}
            <p className="mt-1">({tour.ratingsQuantity} rate)</p>
          </div>
        ) : (
          <div className=" border-b text-gray-500 my-3 pb-3">
          rate:{rate(0)}
          <p className="mt-1">(0 rate)</p>
        </div>
        )}
        </div>
      </div>
      <div className="card-back absolute  h-56 w-full md:h-full -bottom-1/3 md:-bottom-0 flex flex-col justify-center items-center rounded  md:z-0 z-20">
        <p className=" font-medium md:text-2xl mt-14  md:mb-10 uppercase">
          only
        </p>
        <p className="md:mb-20 my-5 text-4xl font">${tour.price}</p>
        <Link
          href={`tour/${tour._id}`}
          className=" hov2 hover:scale-110 md:text-3xl p-3 mb-3 font-bold"
        >
          learn more!
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
