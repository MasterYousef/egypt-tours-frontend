import { AxiosRequestConfig, AxiosResponse } from "axios";
import BaseUrl from "../app/BaseUrl";
import { url } from "../types/types";
async function useInsertData<T>(
  url: url,
  par: object,
  token?: string
): Promise<T> {
  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res: AxiosResponse<T> = await BaseUrl.post(url, par, config);
    return res.data;
  } catch (error: any) {
    return error;
  }
}
export { useInsertData };
