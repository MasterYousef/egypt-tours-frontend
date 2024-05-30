"use client";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import createTourLogic from "../logic/admin-create-tour/adminCreateTour";

 function Page({token}:{token:string}) {
  const logic = createTourLogic(token);
  const [selected, setSelected] = useState(new Date())
  return (
    <div className="flex justify-center items-center p-10 bg-zinc-200">
      <div className="shadow-lg md:w-1/3 relative flex flex-col justify-center h-auto items-center  bg-white rounded  w-full ">
        <label htmlFor="img" className="cursor-pointer w-full img">
          <Image
            src={logic.img}
            width={1000}
            height={1000}
            className=" w-full h-44"
            alt={""}
          />
        </label>
        <input
          className=" absolute top-5 opacity-0"
          type="file"
          id="img"
          name="img"
          onChange={logic.changeImg}
        ></input>
        <form
          className=" w-full pb-3 text-center mx-5 text-2xl card-details border-t"
          onSubmit={logic.handleSubmit}
        >
          <div className="font-bold text-center md:text-md lg:text-2xl rounded p-3 ">
            <input
              placeholder="Name"
              name="name"
              type="text"
              min={1}
              className=" w-full text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500"
            />
          </div>
          <div className=" border-b  my-1 py-3">
            <input
              placeholder="number of days"
              name="duration"
              type="number"
              min={1}
              className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
            />
          </div>
          <div className=" border-b  my-1 py-3">
            <input
              placeholder="number of guides"
              name="guides"
              type="number"
              min={1}
              className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
            />
          </div>
          <div className=" border-b  my-1 py-3">
            <input
              placeholder="Max People Count"
              name="maxPeople"
              type="number"
              min={1}
              className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500  text-xl"
            />
          </div>
          <div className=" border-b  my-1 py-3">
            <textarea
              placeholder="description"
              name="description"
              minLength={20}
              maxLength={70}
              className=" w-3/4 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
            />
          </div>
          <div className="border-b  my-1 py-3">
              <DatePicker
                selected={selected}
                onChange={logic.setDate}
                dateFormat="dd/MM/yyyy"
                className=" text-center cursor-pointer"
              />
          </div>
          <div className="border-b my-1 py-3 ">
            <input
              placeholder="Price"
              name="price"
              type="number"
              min={1}
              className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
            />
          </div>
          <button
            type="submit"
            className=" w-1/3 p-1 my-2   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded text-xl"
          >
            Add Tour
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
