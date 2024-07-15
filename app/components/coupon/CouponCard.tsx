"use client";
import CouponCardLogic from "@/logic/coupon/CouponCardLogic";
import { coupon } from "@/types/types";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import ReactDatePicker from "react-datepicker";
import Submit from "../utils/Submit";

function CouponCard({ coupon, token }: { coupon: coupon; token: string }) {
  const logic = CouponCardLogic(coupon, token);
  const date = coupon.expire
    .replace("T00:00:00.000Z", "")
    .split("-")
    .reverse()
    .join("/");
  return (
    <div className="background w-full h-1/5 p-3 rounded my-5 relative">
      {logic.update === true ? (
        <form action={logic.formAction}>
          <p className="my-2 font-semibold font-mono">
            name:
            <input
              type="text"
              name="name"
              minLength={2}
              defaultValue={coupon.name}
              className="bg-inherit outline outline-2 rounded px-1 outline-black ms-1"
            />
          </p>
          <p className="my-2 font-semibold font-mono">
            discount:
            <input
              type="number"
              name="discount"
              defaultValue={coupon.discount}
              min={5}
              max={100}
              className="bg-inherit outline outline-2 rounded px-1 outline-black ms-1 w-1/12"
            />{" "}
            %
          </p>
          <p className="my-2 font-semibold font-mono">
            expire:
            <ReactDatePicker
              selected={logic.CDate}
              onChange={(date: Date) => logic.setDate(date)}
              dateFormat="dd/MM/yyyy"
              required
              name="expire"
              className="bg-inherit outline outline-2 rounded px-1 outline-black ms-1 w-1/2"
            />
          </p>
          <Submit
            text="Update"
            className=" absolute bottom-2 right-2 bg-sky-600 font-medium rounded duration-150 hover:font-semibold hover:scale-110 p-1"
          />
        </form>
      ) : (
        <>
          <p className="my-2 font-semibold font-mono">name: {coupon.name}</p>
          <p className="my-2 font-semibold font-mono">
            discount: {coupon.discount}%
          </p>
          <p className="my-2 font-semibold font-mono">expire: {date}</p>
        </>
      )}
      <div className="absolute top-1 right-1">
        <i
          className="fa-solid fa-pen-to-square cursor-pointer mx-2"
          onClick={() => logic.setUpdate(!logic.update)}
        ></i>
        <i
          className="fa-solid fa-trash-can cursor-pointer"
          onClick={() => logic.setOpen(true)}
        ></i>
      </div>
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
                    <p>Are you sure you want to delete this coupon ?</p>
                    <div className="flex justify-evenly items-center mt-5 text-xl">
                      <button
                        onClick={() => logic.setOpen(false)}
                        className=" px-3 py-1 bg-neutral-600 rounded text-gray-400 duration-300 ease-in-out hover:bg-neutral-800 hover:text-white hover:scale-110"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => logic.handleDeleteCoupon()}
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

export default CouponCard;
