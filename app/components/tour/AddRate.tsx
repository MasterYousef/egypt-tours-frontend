"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import RatingComponent from "./RatingComponent";
import { user } from "@/types/types";
import AddRateLogic from "@/logic/tour/AddRateLogic";
import { ToastContainer } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";

function AddRate({ user,token }: { user: user,token:string }) {
  const logic = AddRateLogic(token);
  return (
    <div className="flex flex-col items-center lg:flex-row justify-start w-full p-2 border-b-2">
      <Image
        src={user.image}
        width={500}
        height={500}
        alt=""
        className=" w-1/2 lg:w-1/12 my-auto rounded-full"
      />
      <div className="flex flex-col items-center lg:items-baseline w-full px-5 mt-5">
        <RatingComponent
          value={logic.rating}
          onChange={logic.handleStarClick}
        />
        <textarea
          onChange={(e) => logic.setComment(e.target.value)}
          className="w-full h-20 border-amber-300 border-2 focus-visible:outline-amber-500 p-1"
          placeholder="add your comment here"
        />
        <div className="w-full text-center lg:text-right">
          <button onClick={logic.handleSubmit} className="p-2 mt-2 btn">
            Add Rate
          </button>
        </div>
      </div>
      <Transition appear show={logic.loading} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => null}
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
                  <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
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

export default AddRate;
