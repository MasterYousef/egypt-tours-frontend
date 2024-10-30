import useGetData from "@/hooks/useGetData"
import { coupon, couponRes } from "@/types/types"


async function couponLogic(token:string,page:number=1) {
    let coupons:couponRes|undefined;
    const getData = async()=>{
        const res = await useGetData<couponRes>(`/api/v1/coupon?limit=3&page=${page}`,token)
        if(res.status === "success"){
            coupons = res
        }else{
            coupons = undefined
        }
    }
    await getData()
return{coupons}
}

export default couponLogic