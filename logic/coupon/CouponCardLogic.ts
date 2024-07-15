import UpdateCouponAction from "@/actions/coupon/UpdateCouponAction"
import handleErrors from "@/hooks/handleErrors"
import useDeleteData from "@/hooks/useDeleteData"
import { coupon, ErrorResponse } from "@/types/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

function CouponCardLogic(coupon:coupon,token:string) {
  const updateUserWithId = UpdateCouponAction.bind(null,coupon._id)
  const [state, formAction] = useFormState(updateUserWithId,undefined)
  const [open,setOpen] = useState(false)
  const [loading,setLoading] = useState(false)
  const [update,setUpdate] = useState(false)
  const [CDate,setDate] = useState<Date>(new Date(coupon.expire))
  const {refresh} = useRouter()
  const handleDeleteCoupon = async()=>{
    setLoading(true)
    const res = await useDeleteData<{name:string}>(`/api/v1/coupon/${coupon._id}`,token)
    setOpen(false)
    setLoading(false)
    if(res.name !== "AxiosError"){
        toast.success("coupon deleted succesfly")
        setTimeout(()=>{refresh()},2000)
    }else{
        handleErrors(res as unknown as ErrorResponse)
    }
  }
  useEffect(() => {
    if (state?.error) {
      if (state?.error === "jwt malformed") {
        handleErrors(state?.error as unknown as ErrorResponse);
      } else {
        toast.error(state?.error);
      }
    } else if (state?.errors) {
      handleErrors({ response: { data: { errors: state?.errors } } });
    } else if (state?.success) {
      toast.success(state?.success);
      setTimeout(() => {
        refresh();
      }, 1000);
    }
  }, [state]);
  return {open,setOpen,loading,handleDeleteCoupon,update,setUpdate,CDate,setDate,formAction}
}

export default CouponCardLogic