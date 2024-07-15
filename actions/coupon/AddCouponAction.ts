"use server"

import { useInsertData } from "@/hooks/useInsertData"
import { couponRes, ErrorResponse } from "@/types/types"
import { cookies } from "next/headers"

async function AddCouponAction(prevState: any, formData: FormData) {
    const token = cookies().get("token")
    const name = formData.get("name") as string
    const discount = formData.get("discount") as unknown as number
    const date = formData.get("expire") as string
    const expire = date.split("/").reverse().join("-")
    if(token){
        const res = await useInsertData<couponRes| ErrorResponse>("/api/v1/coupon",{
            name,
            discount,
            expire
        },token.value)
          if ("status" in res) {
            if (res.status === "success") {
              return {success:"Coupon added successfully"};
            }
          } else if ("response" in res) {
            if (res.response.data.message) {
              return { error: res.response.data.message };
            } else {
              return { errors: res.response.data.errors };
            }
          }
    }else{
        return {error:"you need to login first."}
    }

        return{error:"please try again latter"}

}

export default AddCouponAction