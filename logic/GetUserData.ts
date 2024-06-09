import { cookies } from "next/headers";
import { cookie, user } from "@/types/types";

const GetUserData = (): {user:user,token:string} => {
  const store = cookies();
  const data = store.get("user") as cookie;
  const data2 = store.get("token") as cookie;
  const token = data2?.value
  const user: user = data?.value.startsWith("j:")
    ? JSON.parse(data.value.slice(2))
    : data;
  return {user,token};
};
export default GetUserData;
