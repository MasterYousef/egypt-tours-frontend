"use client";
import ReactDatePicker from "react-datepicker";
import optionsLogic from "@/logic/Admin-Tours/options";
import { useSearchParams } from "next/navigation";
function Options({
  setSearch,
  search
}: {
  setSearch: React.Dispatch<React.SetStateAction<string[]>>;
  search:string[]
}) {
  const searchParams = useSearchParams();
  const query = searchParams.toString() 
    ? Object.fromEntries(new URLSearchParams(searchParams.toString()))
    : {};
  console.log(query);
  
 const logic = optionsLogic(search,setSearch)
  return (
    <div className="md:col-span-3 col-span-12 mt-10">
      <div className="w-full px-4 py-2 my-5">
        <p>ratings Average:</p>
        <div className="flex flex-col">
          {logic.RepeatIcon(4, 1)}
          {logic.RepeatIcon(3, 2)}
          {logic.RepeatIcon(2, 3)}
          {logic.RepeatIcon(1, 4)}
          {logic.RepeatIcon(0, 5)}
        </div>
      </div>
      <div className="w-full px-4 my-10">
        <p className="mb-5">start Dates:</p>
        <div className="my-3 flex flex-col">
        <span className="me-3">From:</span>
        <ReactDatePicker
          selected={logic.from}
          onChange={logic.setFromDate}
          dateFormat="dd/MM/yyyy"
          className=" text-center w-full cursor-pointer focus-within:outline-amber-400 rounded md:w-5/6"
        />
        <button onClick={()=>logic.clearFromDate()} className="w-full md:w-5/6 mt-3 bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded">clear</button>
        </div>
        <div className="flex flex-col">
        <span className="me-8">To:</span>
        <ReactDatePicker
          selected={logic.to}
          onChange={logic.setToDate}
          dateFormat="dd/MM/yyyy"
          className=" text-center w-full cursor-pointer focus-within:outline-amber-400 rounded md:w-5/6"
        />
        <button onClick={()=>logic.clearToDate()} className=" w-full md:w-5/6 mt-3 bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded">clear</button>
        </div>
        </div>
      <form onSubmit={logic.setPepole} className="w-full px-4 my-5">
        <p>Number of group members:</p>
        <div className="flex">
          <div className=" relative w-1/2">
            <label htmlFor="minGroup" className=" absolute top-3 left-1">
              <i className="fa-solid fa-users"></i>
            </label>
            <input
              type="number"
              name="minGroup"
              defaultValue={query?.["maxPeople[gte]"]}
              min={0}
              placeholder="min"
              className="p-1 w-11/12 ps-7 rounded focus-visible:outline-yellow-500 my-2"
            />
          </div>
          <div className=" relative w-1/2">
            <label htmlFor="maxGroup" className=" absolute top-3 left-1">
              <i className="fa-solid fa-users"></i>
            </label>
            <input
              type="number"
              name="maxGroup"
              defaultValue={query?.["maxPeople[lte]"]}
              min={0}
              placeholder="max"
              className="p-1 ps-7 w-11/12 rounded focus-visible:outline-yellow-500 my-2"
            />
          </div>
          <button
            className=" p-1  my-auto h-full  bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded"
          >
            Go
          </button>
        </div>
      </form>
      <form onSubmit={logic.setPrice} className="w-full px-4 my-5">
        <p>price :</p>
        <div className="flex">
          <div className=" relative w-1/2">
            <label htmlFor="minPrice" className=" absolute top-3 left-1">
              $
            </label>
            <input
              type="number"
              name="minPrice"
              defaultValue={query?.["price[gte]"]}
              placeholder="min"
              className="p-1 w-11/12 ps-4 rounded focus-visible:outline-yellow-500 my-2"
            />
          </div>
          <div className=" relative w-1/2">
            <label htmlFor="maxPrice" className=" absolute top-3 left-1">
              $
            </label>
            <input
              type="number"
              name="maxPrice"
              defaultValue={query?.["price[lte]"]}
              placeholder="max"
              className="p-1 ps-4 w-11/12 rounded focus-visible:outline-yellow-500 my-2"
            />
          </div>
          <button className=" p-1  my-auto h-full   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded">
            Go
          </button>
        </div>
      </form>
      <form onSubmit={logic.setDuration} className="w-full px-4 my-5">
        <p>Duration :</p>
        <div className="flex">
          <div className=" relative w-1/2">
            <label htmlFor="minDuration" className=" absolute top-3 left-1">
              <i className="fa-solid fa-hourglass-end"></i>
            </label>
            <input
              type="number"
              name="minDuration"
              defaultValue={query?.["duration[gte]"]}
              placeholder="min"
              className="p-1 w-11/12 ps-5 rounded focus-visible:outline-yellow-500 my-2"
            />
          </div>
          <div className=" relative w-1/2">
            <label htmlFor="maxDuration" className=" absolute top-3 left-1">
              <i className="fa-solid fa-hourglass-end"></i>
            </label>
            <input
              type="number"
              name="maxDuration"
              defaultValue={query?.["duration[lte]"]}
              placeholder="max"
              className="p-1 ps-5 w-11/12 rounded focus-visible:outline-yellow-500 my-2"
            />
          </div>
          <button className=" p-1  my-auto h-full   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded">
            Go
          </button>
        </div>
      </form>
    </div>
  );
}
export default Options;
