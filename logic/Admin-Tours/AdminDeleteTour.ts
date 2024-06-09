import handleErrors from "@/hooks/handleErrors"
import useDeleteData from "@/hooks/useDeleteData"
import { ErrorResponse } from "@/types/types"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


function AdminDeleteTour(id:string) {
const [open,setOpen] = useState(false)
const [loading,setLoading] = useState(false)
const {refresh} = useRouter()
const confirmDelete = async (user:string)=>{
    setLoading(true)
    const res = await useDeleteData<{name:string}>(`/api/v1/tour/${id}`,user)
    setLoading(false)
    setOpen(false)
    console.log(res);
    if(res.name !== "AxiosError"){
        toast.success("tour deleted succesfly")
        setTimeout(()=>{refresh()},2000)
    }else{
        handleErrors(res as unknown as ErrorResponse)
    }
}
return{open,setOpen,loading,confirmDelete}
}

export default AdminDeleteTour