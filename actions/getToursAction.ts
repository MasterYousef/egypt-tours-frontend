"use server";
import useGetData from "@/hooks/useGetData";
import {  query, tourResponse } from "@/types/types";

async function getToursAction(limit: number = 3,query:query={sort:"-ratingsAverage"}): Promise<tourResponse|false> {
    const data = Object.entries(query).map((e)=>{
      return e.join("=")
    })
    const search = data.join("&")
    const res = await useGetData<tourResponse>(`/api/v1/tour?limit=${limit}&${search}`);
  if (res.status === "success") {
    return {data:res.data,paginationResult:res.paginationResult} as tourResponse
  } else {
    return false
  }
}

export default getToursAction;
