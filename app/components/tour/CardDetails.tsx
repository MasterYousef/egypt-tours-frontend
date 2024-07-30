"use client";
import { oneTour } from "@/types/types";
import Slider from "./Slider";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CardDetailsLogic from "@/logic/tour/CardDetailsLogic";
import Submit from "../utils/Submit";
import { ToastContainer } from "react-toastify";

function CardDetails({ tour }: { tour: oneTour }) {
  const logic = CardDetailsLogic();
  const date = tour.start
    .replace("T00:00:00.000Z", "")
    .split("-")
    .reverse()
    .join("-");
  return (
    <div className="flex justify-between flex-wrap lg:h-96 w-full my-10 bg-white rounded ">
      <Slider images={tour.images} />
      <div className="flex flex-wrap lg:justify-center w-full h-1/2 lg:h-full lg:w-1/2 p-10 relative">
        <div className="w-full h-1/3 lg:w-1/2 lg:h-5/6 flex justify-evenly items-start flex-col">
          <div>
            <i className="fa-solid fa-users text-2xl"></i>
            <span className="text-md lg:text-xl mx-2">
              up to {tour.maxPeople} people
            </span>
          </div>
          <div>
            <i className="fa-regular fa-calendar text-2xl"></i>
            <span className="text-md lg:text-xl mx-2">start: {date}</span>
          </div>
          <div>
            <i className="fa-solid fa-coins text-2xl"></i>
            {logic.discount <= 0 ? (
              <span className="text-md lg:text-xl mx-2">
                only ${tour.price}
              </span>
            ) : (
              <span className="text-md lg:text-xl mx-2">
                only <del>${tour.price}</del> $
                {tour.price - tour.price * (logic.discount / 100)}
              </span>
            )}
          </div>
        </div>
        <div className="w-full h-1/3 lg:w-1/2 lg:h-5/6 flex justify-evenly items-start flex-col">
          <div>
            <i className="fa-solid fa-hourglass-end text-2xl"></i>
            <span className="text-md lg:text-xl mx-2">
              {tour.duration} days tour
            </span>
          </div>
          <div>
            <i className="fa-solid fa-person-chalkboard text-2xl"></i>
            <span className="text-md lg:text-xl mx-2">
              {tour.guides} guides in tour
            </span>
          </div>
          <div>
            <i className="fa-solid fa-circle-check text-2xl"></i>
            <span className="text-md lg:text-xl mx-2">
              {tour.people} tour bookings
            </span>
          </div>
        </div>
        <button
          className="p-2 hov3 absolute top-2 right-2"
          onClick={() => logic.setOpen(true)}
        >
          Add coupon
        </button>
        <button
          className="p-2 mt-1 btn"
          onClick={() => logic.BookTour(tour._id, tour.price)}
        >
          Book Now
        </button>
      </div>
      <Transition appear show={logic.open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => null}>
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              {logic.loading === true ? (
                <Dialog.Panel className="  transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <div className=" flex flex-col justify-center items-center">
                    <i className="fa-solid fa-circle-notch animate-spin text-7xl text-yellow-500 mb-10"></i>
                    <div className="text-5xl">
                      Loading..<span className="animate-ping">.</span>
                    </div>
                  </div>
                </Dialog.Panel>
              ) : (
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <form
                    action={logic.formAction}
                    className="transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all"
                  >
                    <p className=" font-semibold font-sans text-xl my-2">
                      Add coupon name:
                    </p>
                    <input
                      type="text"
                      name="coupon"
                      className="w-full h-10 p-2 border-2 border-gray-300 focus-within:outline-amber-400 rounded"
                    />
                    <div className="flex justify-evenly items-center mt-5 text-xl">
                      <button
                        onClick={() => logic.setOpen(false)}
                        className=" px-3 py-1 bg-neutral-600 rounded text-gray-400 duration-300 ease-in-out hover:bg-neutral-800 hover:text-white hover:scale-110"
                      >
                        close
                      </button>
                      <Submit text={"apply"} className="btn p-1 px-2" />
                    </div>
                  </form>
                </Transition.Child>
              )}
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer />
    </div>
  );
}

export default CardDetails;
