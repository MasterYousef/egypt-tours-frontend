"use client";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { oneTour } from "@/types/types";
import { useRouter } from "next/navigation";
import getToursAction from "@/actions/getToursAction";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function SortDropDown({setSort}:{setSort:Dispatch<SetStateAction<string>>}) {
  return (
    <Menu as="div" className="relative inline-block text-left md:ms-5 z-20">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          sort by
          <i className="fa-solid fa-angle-down mt-1"></i>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  left-px z-10 mt-2 w-full md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("-ratingsAverage")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  Highest rated
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("ratingsAverage")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  Lowest rated
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("-price")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left  text-sm"
                  )}
                >
                  highest price
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("price")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left  text-sm"
                  )}
                >
                  lowest price
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("-duration")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left  text-sm"
                  )}
                >
                  highest duration
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("duration")}
                
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left  text-sm"
                  )}
                >
                  shortest duration
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("-maxPeople")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left  text-sm"
                  )}
                >
                  largest group
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>setSort("maxPeople")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left  text-sm"
                  )}
                >
                  Smallest group
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default SortDropDown;
