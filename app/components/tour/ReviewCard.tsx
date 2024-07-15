"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { rateResponse, user } from "@/types/types";
import rate from "../utils/rate";
import ReviewCardLogic from "@/logic/tour/ReviewCardLogic";
import { Dialog, Transition } from "@headlessui/react";
import RatingComponent from "./RatingComponent";

function ReviewCard({
  review,
  user,
  token,
}: {
  review: rateResponse["data"];
  user?: user;
  token?: string;
}) {
  const logic = ReviewCardLogic(review,user?.role,token);
  return (
    <div className="flex flex-col items-center lg:flex-row justify-start w-full p-2 border-b-2 relative">
      <Image
        src={review.user.image}
        width={500}
        height={500}
        alt=""
        className=" w-1/2 lg:w-1/12 my-auto rounded-full"
      />
      {logic.update === true ? (
        <div className="flex flex-col items-center lg:items-baseline w-full px-5 mt-5">
          <RatingComponent value={review.rate} onChange={(e)=>logic.setRate(e)} />
          <textarea
            onChange={(e)=>logic.setComment(e.target.value)}
            defaultValue={review.comment}
            maxLength={100}
            className="w-full h-20 border-amber-300 border-2 focus-visible:outline-amber-500 p-1"
          />
          <div className="my-1 lg:w-full lg:justify-end lg:flex-row lg:text-right flex flex-col-reverse items-center w-1/2">
            <button
              onClick={() => logic.setUpdate(false)}
              className="p-1 m-2 lg:w-1/6 w-full bg-neutral-600 rounded text-gray-400 duration-300 ease-in-out hover:bg-neutral-800 hover:text-white hover:scale-110"
            >
              cansle
            </button>
            <button onClick={()=>logic.handleUpdate()} className="btn lg:w-1/6 w-full p-1 m-2">update</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center lg:items-baseline w-full px-5 mt-5">
          {rate(review.rate)}
          <div className="w-full h-20 p-1 text-center lg:text-left">
            {review.comment}
          </div>
        </div>
      )}
      {user?._id === review.user._id ? (
        <div className="absolute right-0 top-1">
          <i
            onClick={() => logic.setUpdate(true)}
            className="fa-solid fa-pen-to-square cursor-pointer mx-1"
          ></i>
          <i
            onClick={() => logic.setOpen(true)}
            className="fa-solid fa-trash-can cursor-pointer mx-1"
          ></i>
        </div>
      ) : user?.role === "admin" ? (
        <div className="absolute right-0 top-1">
          <i
            onClick={() => logic.setOpen(true)}
            className="fa-solid fa-trash-can cursor-pointer mx-1"
          ></i>
        </div>
      ) : null}
      {token ? (
        <Transition appear show={logic.open} as={Fragment}>
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
                        <button
                          onClick={() => logic.confirmDelete()}
                          className=" px-3 py-1 bg-red-700 rounded opacity-80 duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                        >
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
      ) : null}
    </div>
  );
}

export default ReviewCard;
