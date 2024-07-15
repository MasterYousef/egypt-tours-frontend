"use client";
import Image from "next/image";
import im from "/public/image/verfiy-code.png";
import verfiyCodeLogic from "@/logic/forget-password/verfiyCode";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
export default function page() {
  const logic = verfiyCodeLogic();
  if(localStorage.getItem("email")){
      return (
    <div className="h-screen main flex justify-center items-center">
      <div className="bg-white w-1/2 flex flex-1 md:flex-none flex-col justify-center items-center rounded p-5">
        <Image
          width={1000}
          height={1000}
          src={im.src}
          className=" h-1/4 w-1/2"
          alt={""}
        />
        <p className=" font-serif">
          please enter the code who sent to your email
        </p>
        <div className="w-3/4 md:w-1/2">
          {" "}
          <input
            type="text"
            onChange={(e) => logic.setCode(e.target.value)}
            required
            placeholder="enter verfiy code"
            className="px-8 m-3 text-center mx-auto block w-full  ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
          />
        </div>
        <button
          onClick={logic.handleSubmit}
          className="w-3/4 md:w-1/2 rounded  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
        >
          verfiy code
        </button>
      </div>
      <Transition appear show={logic.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => logic.setIsOpen(false)}
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
    </div>
  );
  }else{
    throw new Error("please enter your email first to sent code")
  }

}
