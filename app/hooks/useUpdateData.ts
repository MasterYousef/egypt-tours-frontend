import { AxiosRequestConfig, AxiosResponse } from "axios";
import BaseUrl from "../BaseUrl";
import { url } from "../types/types";
async function useUpdateData<T>(url: url, par: object ,token?:string): Promise<T> {
  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res: AxiosResponse<T> = await BaseUrl.put(url, par, config);
    return res.data;
  } catch (error: any) {
    return error;
  }
}
export { useUpdateData };