"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer } from "react-toastify";
import { oneTour, tour } from "@/types/types";
import updateTourLogic from "@/logic/Admin-Tours/updateTourLogic";
import GetUserAction from "@/actions/GetUserAction";
import useGetData from "@/hooks/useGetData";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import ImageUploader from "@/app/components/utils/ImageUploader";
import { Dialog, Transition } from "@headlessui/react";

  function page({params}:{params:Params}) {
    const logic = updateTourLogic(params.tour_id);
    return (
      <div className="flex justify-center items-center p-10 main w-full">
        <div className="shadow-lg md:w-1/3 relative flex flex-col justify-center h-auto items-center  bg-white rounded  w-full ">
        <ImageUploader file={logic.file} setFile={logic.setFile} images={logic.images} setImages={logic.setImages}/>
          <form
            className=" w-full pb-3 text-center mx-5 text-2xl card-details border-t"
            onSubmit={logic.handleSubmit}
          >
            <div className="font-bold text-center md:text-md lg:text-2xl rounded p-3 ">
              <input
                placeholder="Name"
                defaultValue={logic.tour.title}
                name="name"
                type="text"
                min={1}
                className=" w-full text-center text-2xl rounded focus-within:outline-4 focus-visible:outline-yellow-500"
              />
            </div>
            <div className=" border-b  my-1 py-3">
              <input
                placeholder="number of days"
                defaultValue={logic.tour.duration}
                name="duration"
                type="number"
                min={1}
                className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
              />
            </div>
            <div className=" border-b  my-1 py-3">
              <input
                placeholder="Max People Count"
                defaultValue={logic.tour.maxPeople}
                name="maxPeople"
                type="number"
                min={1}
                className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500  text-xl"
              />
            </div>
            <div className=" border-b  my-1 py-3">
              <input
                placeholder="number of guides"
                defaultValue={logic.tour.guides}
                name="guides"
                type="number"
                min={1}
                className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
              />
            </div>
            <div className=" border-b  my-1 py-3">
              <textarea
                placeholder="description"
                defaultValue={logic.tour.description}
                name="description"
                minLength={10}
                maxLength={255}
                className=" w-3/4 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
              />
            </div>
            <div className="border-b  my-1 py-3">
                <DatePicker
                  selected={logic.selected}
                  onChange={logic.setDate}
                  dateFormat="dd/MM/yyyy"
                  className=" text-center cursor-pointer text-xl w-full"
                />
            </div>
            <div className="border-b my-1 py-3 ">
              <input
                placeholder="Price"
                defaultValue={logic.tour.price}
                name="price"
                type="number"
                min={1}
                className=" w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl"
              />
            </div>
            <button
              type="submit"
              className=" w-1/2 p-1 my-2   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded text-xl"
            >
              Update Tour
            </button>
          </form>
        </div>
        <Transition appear show={logic.loading} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="  transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <div className=" flex flex-col justify-center items-center">
                    <i className="fa-solid fa-circle-notch animate-spin text-7xl text-yellow-500 mb-10"></i>
                    <div className="text-5xl">
                      Loading..<span className="animate-ping">.</span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        <ToastContainer/>
      </div>
    );
}

export default page;