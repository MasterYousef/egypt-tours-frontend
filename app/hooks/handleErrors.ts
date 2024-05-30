import { toast } from "react-toastify"
import {ErrorResponse} from "../types/types"

const handleErrors = (error:ErrorResponse)=>{
    console.log(error);
if(error.response){
    if(error.response.data.errors){
        error.response.data.errors.forEach((e)=>{
            toast.error(e.msg)
        })
    }else if(error.response.data.message){
        toast.error(error.response.data.message)
    }
}else{
    toast.error("error please try again latter")
}

    
}
export default handleErrors