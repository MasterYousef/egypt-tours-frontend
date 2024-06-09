"use server";
import { AxiosResponse } from "axios";
import BaseUrl from "../app/BaseUrl";
import { url } from "../types/types";
async function useGetData<T>(url: url): Promise<T> {
  try {
    const res: AxiosResponse<T> = await BaseUrl.get(url);
    return res.data;
  } catch (error: any) {
    return error;
  }
}
export default useGetData;
