import { AxiosRequestConfig, AxiosResponse } from "axios";
import BaseUrl from "../app/BaseUrl";
import { url } from "../types/types";
async function useDeleteData<T>(url: url,token:string): Promise<T> {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res: AxiosResponse<T> = await BaseUrl.delete(url,config);
    return res.data;
  } catch (error: any) {
    return error;
  }
}
export default useDeleteData;