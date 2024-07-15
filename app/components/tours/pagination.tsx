"use client";
import { paginationResult } from "@/types/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pagination }: { pagination: paginationResult }) {
  const nextAndPrev =
    "px-3 py-1 border border-gray-300 bg-amber-300 rounded hover:bg-amber-500 ease-in-out duration-500";
    const {replace} = useRouter()
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
  const handleChange = (e:{selected:number})=>{
    const num = e.selected + 1
    params.set("page",num.toString())
    replace(`${pathname}?${params}`);
  }
  if(pagination?.pages<=1){
    return null
  }else{
      return (
    <>
      <ReactPaginate
        pageCount={pagination?.pages}
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        className="flex col-span-12 md:col-start-6 md:col-end-12 w-full justify-center items-center my-2 "
        pageLinkClassName={
          "page-link px-3 py-1 border border-gray-300 rounded-md hover:bg-amber-300"
        }
        previousLinkClassName={nextAndPrev}
        nextLinkClassName={nextAndPrev}
        breakLinkClassName={
          "page-link px-3 py-1 border border-gray-300 rounded-md"
        }
        activeLinkClassName={"bg-amber-400"}
        onPageChange={handleChange}
      />
    </>
  );
  }

}

export default Pagination;
