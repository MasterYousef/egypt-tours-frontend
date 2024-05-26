"use client";
import Image from "next/image";
import im from "/public/image/forget-password.png";
export default function page() {
  return (
    <div className="h-screen bg-zinc-200 flex justify-center items-center">
      <div className="bg-white w-1/2 flex flex-1 md:flex-none flex-col justify-center items-center rounded p-5">
        <Image
          width={1000}
          height={1000}
          src={im.src}
          className=" h-1/4 w-1/2"
          alt={""}
        />
        <p className=" font-serif">
          please enter your email to reset your password
        </p>
        <div className="md:w-1/2 w-3/4 relative flex justify-start items-center">
          {" "}
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="enter your email"
            className="px-8 m-3 mx-auto block w-full text-center  ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
          />
          <i className="fa-solid fa-envelope text-amber-400 text-2xl absolute mx-1 "></i>
        </div>
        <button
          className="md:w-1/2 w-3/4 rounded  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
        >
          send code
        </button>
      </div>
    </div>
  );
}
