"use client";
import React, { Fragment, useState } from "react";
import Title from "../utils/Title";
import signUpLogic from "@/logic/auth/signUp";
import { Dialog, Transition } from "@headlessui/react";
function SignUp() {
  const logic = signUpLogic();
  const [passwordShow, setPasswrdShow] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Title text="sign up Now" />
      </div>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={logic.handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={passwordShow ? "text" : "password"}
                autoComplete="current-password"
                required
                className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
              />
              <i
                className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none ${
                  passwordShow ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                }`}
                onClick={() => setPasswrdShow(!passwordShow)}
              />
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
            <div className="mt-2 relative">
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                type={passwordConfirmShow ? "text" : "password"}
                autoComplete="current-password"
                required
                className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
              />
              <i
                className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none ${
                  passwordConfirmShow
                    ? "fa-regular fa-eye"
                    : "fa-regular fa-eye-slash"
                }`}
                onClick={() => setPasswordConfirmShow(!passwordConfirmShow)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
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
}
export default SignUp;
