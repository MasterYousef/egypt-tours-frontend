"use client";
import Image from "next/image";
import React, { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { oneTour } from "@/types/types";
import AdminDeleteTour from "@/logic/Admin-Tours/AdminDeleteTour";
function AdminTourCard({ tour,user }: { tour: oneTour,user:string }) {
  const logic = AdminDeleteTour(tour._id);
  const rate = (avg: number): ReactNode => {
    const rate = [];
    const unRate = [];
    for (let i = 0; i < avg; i++) {
      rate.push(<i className="fa-solid fa-star text-yellow-500" key={i}></i>);
    }
    for (let i = 0; i < 5 - avg; i++) {
      unRate.push(
        <i className="fa-regular fa-star text-yellow-500" key={i}></i>
      );
    }
    return (
      <span>
        {rate}
        {unRate}
      </span>
    );
  };
  const date = tour.start
    .replace("T00:00:00.000Z", "")
    .split("-")
    .reverse()
    .join("-");
  return (
    <div className="shadow-lg admin-card my-5  mx-3 flex flex-col justify-center items-center relative bg-white md:rounded w-full overflow-hidden ">
      <div className="bg w-full p-2 flex justify-between absolute top-0 items-center z-10">
        <Link href={`Admin-Tours/${tour?._id.toString()}`}>
          <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
        </Link>
        <i
          className="fa-solid fa-trash-can cursor-pointer"
          onClick={() => logic.setOpen(true)}
        ></i>
      </div>
      <Image
        src={tour.imageCover}
        width={1000}
        height={1000}
        className=" w-full  h-40 card-im"
        alt={""}
      />
      <div className="card-head font-bold md:text-1xl lg:text-2xl text-center rounded p-3 top-32">
        {tour.title}
      </div>
      <div className=" w-3/4 p-3 text-center text-sm pb-12 md:pb-1">
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
        <p className=" border-b text-gray-500 my-3 pb-3">
          price: {tour.price}$
        </p>
        {tour.ratingsAverage ? (
          <div className=" border-b text-gray-500 my-3 pb-3">
            rate:{rate(tour.ratingsAverage)}
            <p className="mt-3">({tour.ratingsQuantity} rate)</p>
          </div>
        ) : (
          <div className=" border-b text-gray-500 my-3 pb-3">
          rate:{rate(0)}
          <p className="mt-3">(0 rate)</p>
        </div>
        )}
      </div>
      <Transition appear show={logic.open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => logic.setOpen(false)}
        >
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
                {logic.loading === true ? (
                  <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                    <div className=" flex flex-col justify-center items-center">
                      <i className="fa-solid fa-circle-notch animate-spin text-7xl text-yellow-500 mb-10"></i>
                      <div className="text-5xl">
                        Loading..<span className="animate-ping">.</span>
                      </div>
                    </div>
                  </Dialog.Panel>
                ) : (
                  <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                    <p>Are you sure you want to delete this tour ?</p>
                    <div className="flex justify-evenly items-center mt-5 text-xl">
                      <button
                        onClick={() => logic.setOpen(false)}
                        className=" px-3 py-1 bg-neutral-600 rounded text-gray-400 duration-300 ease-in-out hover:bg-neutral-800 hover:text-white hover:scale-110"
                      >
                        Close
                      </button>
                      <button onClick={()=>logic.confirmDelete(user)} className=" px-3 py-1 bg-red-700 rounded opacity-80 duration-300 ease-in-out hover:opacity-100 hover:scale-110">
                        Delete
                      </button>
                    </div>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer />
    </div>
  );
}

export default AdminTourCard;
