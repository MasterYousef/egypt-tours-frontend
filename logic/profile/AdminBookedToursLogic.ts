"use client"
import GetUserAction from "@/actions/GetUserAction";
import handleErrors from "@/hooks/handleErrors";
import useDeleteData from "@/hooks/useDeleteData";
import { ErrorResponse } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function AdminBookedToursLogic(token:string) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const {refresh} = useRouter()
    const deleteOrder = async(id:string)=>{
        setLoading(true);
        setOpen(true)
        const res = await useDeleteData<{name:string}>(`/api/v1/order/${id}`,token)
        setOpen(false)
        setLoading(false);
        if(res.name !== "AxiosError"){
            toast.success("tour deleted succesfly")
            setTimeout(()=>refresh(),1000)
        }else{
            handleErrors(res as unknown as ErrorResponse)
        }
    }
    return {open,setOpen,loading,setLoading,deleteOrder}
}

export default AdminBookedToursLogic