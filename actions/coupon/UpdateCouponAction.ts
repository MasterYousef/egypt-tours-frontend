"use server"
import { useUpdateData } from '@/hooks/useUpdateData'
import { couponRes, ErrorResponse } from '@/types/types'
import { cookies } from 'next/headers'

async function UpdateCouponAction(id:string,prevState: any, formData: FormData) {
    const token = cookies().get("token")
    const name = formData.get("name") as string
    const discount = formData.get("discount") as unknown as number
    const date = formData.get("expire") as string
    const expire = date.split("/").reverse().join("-")

    if(token){
        const res = await useUpdateData<couponRes| ErrorResponse>(`/api/v1/coupon/${id}`,{
            name,
            discount,
            expire
        },token.value)
          if ("status" in res) {
            if (res.status === "success") {
              return {success:"Coupon updated successfully"};
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

export default UpdateCouponAction