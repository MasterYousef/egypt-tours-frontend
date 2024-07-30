"use client";
import AdminBookedToursLogic from "@/logic/profile/AdminBookedToursLogic";
import { order } from "@/types/types";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

function AdminBookedTours({ order, token }: { order: order; token: string }) {
  const date = order.tour.start
    .replace("T00:00:00.000Z", "")
    .split("-")
    .reverse()
    .join("-");
  const logic = AdminBookedToursLogic(token);
  return (
    <div className="w-full my-2 p-2 bg-white border-2 border-amber-300 rounded flex flex-col lg:flex-row flex-wrap justify-between relative">
      <div>
        <p className="order">tour name : {order.tour.title}</p>
        <p className="order">tour duration : {order.tour.duration}</p>
      </div>
      <div>
        <p className="order">tour start in : {date}</p>
        <p className="order">tour group : {order.tour.people}</p>
      </div>
      <div>
        <p className="order">username :{order.user.username}</p>
        <p className="order">email : {order.user.email}</p>
      </div>
      <div className=" flex items-end">
        <p className="order">order price : {order.price}$</p>
      </div>
      <i
        className="fa-solid fa-trash-can cursor-pointer mx-2 absolute right-1 top-3"
        onClick={() => logic.setOpen(true)}
      ></i>
      <Transition appear show={logic.open} as={Fragment}>
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
                        onClick={() => logic.deleteOrder(order._id)}
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
    </div>
  );
}

export default AdminBookedTours;
