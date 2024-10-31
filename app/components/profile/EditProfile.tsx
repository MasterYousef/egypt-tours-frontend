"use client";
import React, { Fragment } from "react";
import EditProfileLogic from "@/logic/profile/EditProfile";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { user } from "@/types/types";

export default function Edit({ user, token }: { user: user; token: string }) {
  const logic = EditProfileLogic(user, token);
  console.log(user.image)
  return (
    <div>
      <button className="hov2 p-3" onClick={() => logic.setIsOpen(true)}>
        Edit your profile
      </button>
      <Transition appear show={logic.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => "null"}>
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
                  <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                    <div className=" flex flex-col justify-center items-center">
                      <i className="fa-solid fa-circle-notch animate-spin text-7xl text-yellow-500 mb-10"></i>
                      <div className="text-5xl">
                        Loading..<span className="animate-ping">.</span>
                      </div>
                    </div>
                  </Dialog.Panel>
                ) : (
                  <Dialog.Panel className="w-3/4 md:w-1/3 bg-white rounded">
                    <div className="flex w-full flex-col items-center p-5 ">
                      <div className="w-40 h-40 im cursor-pointer relative flex justify-center items-center">
                        {" "}
                        <Image
                          src={logic.image}
                          width={1000}
                          height={1000}
                          className="w-full h-full rounded-full"
                          alt={""}
                        />
                        <input
                          type="file"
                          className="w-full h-full opacity-0 absolute z-10 cursor-pointer"
                          onChange={logic.imgSelctor}
                        />
                      </div>
                      <div className="mt-5 w-full flex flex-col items-center">
                        <input
                          className="text-2xl w-full font-bold mb-3 text-center focus-within:outline-amber-400"
                          value={logic.name}
                          onChange={logic.changeName}
                        />
                        <input
                          className="mb-5 w-full text-center focus-within:outline-amber-400"
                          value={logic.email}
                          onChange={logic.changeEmail}
                        />
                      </div>
                      <button
                        onClick={logic.reset}
                        className="w-1/2 rounded mb-3  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
                      >
                        reset
                      </button>
                      <button
                        onClick={logic.editProfile}
                        className="w-1/2 rounded  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
                      >
                        Submit
                      </button>
                      <i
                        onClick={() => logic.setIsOpen(false)}
                        className="fa-regular fa-circle-xmark text-3xl text-red-500 absolute right-2 top-2 cursor-pointer"
                      />
                    </div>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer/>
    </div>
  );
}
