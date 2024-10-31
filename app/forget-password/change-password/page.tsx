"use client";
import React, { useState, Fragment } from "react";
import Title from "@/app/components/utils/Title";
import changePasswordLogic from "@/logic/forget-password/changePassword";
import { Dialog, Transition } from "@headlessui/react";
function LogIn() {
  const logic = changePasswordLogic();
  const [passwordShow, setPasswrdShow] = useState(false);
  if (localStorage.getItem("email")) {
    return (
      <div className="h-screen main flex justify-center items-center">
        <div className="flex flex-1 rounded md:flex-none flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Title text="change your password" />
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={logic.handleSubmit}>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
                  />
                  <label
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer "
                    htmlFor="password"
                  >
                    <i
                      className={`select-none ${
                        passwordShow
                          ? "fa-regular fa-eye"
                          : "fa-regular fa-eye-slash"
                      }`}
                      onClick={() => setPasswrdShow(!passwordShow)}
                    />
                  </label>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="passwordConfirm"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password Confirm
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className=" w-full  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
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
  } else {
    throw new Error("can't find this route");
  }
}
export default LogIn;
