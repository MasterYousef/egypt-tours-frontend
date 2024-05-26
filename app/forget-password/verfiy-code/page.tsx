import Image from "next/image";
import im from "/public/image/verfiy-code.png";
export default function page (){
    return(
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
          please enter the code who sent to your email
        </p>
        <div className="w-3/4 md:w-1/2">
          {" "}
          <input
            type="text"
            required
            placeholder="enter verfiy code"
            className="px-8 m-3 text-center mx-auto block w-full  ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
          />
        </div>
        <button
          className="w-3/4 md:w-1/2 rounded  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
        >
          verfiy code
        </button>
      </div>
        </div>
    )
}