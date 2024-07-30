"use server"
import { useInsertData } from "@/hooks/useInsertData"
import { ErrorResponse, payment } from "@/types/types"
import { cookies } from "next/headers"
 interface data  {
    tour:string,price:number,coupon?:string
 }
async function BookTourAction(data:data){
    const token = cookies().get("token")
    if(token){
          const res = await useInsertData<payment|ErrorResponse>("/api/v1/order/card",data,token.value)
          if ("payment" in res) {
            if (res.payment.state === "created") {       
                console.log(res.payment.links);
                         
              return {success:"created",url:res.payment.links[1].href};
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
export default BookTourAction
