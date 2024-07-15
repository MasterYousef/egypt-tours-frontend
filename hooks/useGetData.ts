"use server";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import BaseUrl from "../app/BaseUrl";
import { url } from "../types/types";
async function useGetData<T>(url: url,token?:string): Promise<T> {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res: AxiosResponse<T> = await BaseUrl.get(url,config);
    return res.data;
  } catch (error: any) {
    return error;
  }
}
export default useGetData;
