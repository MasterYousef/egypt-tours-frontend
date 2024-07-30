"use server"
import useGetData from "@/hooks/useGetData"
import { coupon, ErrorResponse } from "@/types/types"
import { cookies } from "next/headers"

async function ApplyCouponAction(prevState: any, formData: FormData) {
    const token = cookies().get("token")
    const coupon = formData.get("coupon") as string
    if(token){
        const res = await useGetData<{status:string,data:coupon}|ErrorResponse>(`/api/v1/coupon/apply/${coupon}`,token.value)
          if ("status" in res) {
            if (res.status === "success") {
              return {success:"Coupon applied successfully",discount:res.data.discount,coupon};
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

export default ApplyCouponAction