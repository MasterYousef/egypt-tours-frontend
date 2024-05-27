import { cookies } from "next/headers";
import { cookie, user } from "../types/types";

const GetUserData = (): user => {
  const store = cookies();
  const data = store.get("user") as cookie;
  const user: user = data?.value.startsWith("j:")
    ? JSON.parse(data.value.slice(2))
    : data;
  return user;
};
export default GetUserData;
