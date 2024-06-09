"use server";
import { cookies } from "next/headers";
const useLogOut = ():void => {
  const cookie = cookies();
  cookie.delete("user");
  cookie.delete("token");
};
export default useLogOut;
