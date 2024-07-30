import useGetData from "@/hooks/useGetData";
import { orderResponse } from "@/types/types";

async function GetBookedTours(
  user: string,
  token: string,
  role: "user" | "admin"
) {
  if (role === "admin") {
    const res = await useGetData<orderResponse>("/api/v1/order", token);
    if (res.status === "success") {
      return res;
    } else {
      throw new Error("error can't get Booked tours");
    }
  } else {
    const res = await useGetData<orderResponse>(
      `/api/v1/order/userTours/${user}`,
      token
    );
    if (res.status === "success") {
      return res;
    } else {
      throw new Error("error can't get Booked tours");
    }
  }
}

export default GetBookedTours;
