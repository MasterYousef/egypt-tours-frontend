import handleErrors from "@/app/hooks/handleErrors";
import { useInsertData } from "@/app/hooks/useInsertData";
import { loginForm } from "@/app/types/auth";
import ErrorResponse from "@/app/types/error";
import user from "@/app/types/userResponse";
import { toast } from "react-toastify";

const loginLogic = ()=>{
    const handleSubmit = async (e:React.ChangeEvent<loginForm> | React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const event = e as React.ChangeEvent<loginForm>
        if(event.target.password.value){
            const data = {
                email: event.target.email.value,
                password: event.target.password.value,
            } 
            const res = await useInsertData<user>("/api/v1/auth/login",data) 
            if(res.status === "success"){
                toast.success("user has been login successfully",{
                    className:"h-16 w-70 text-sm"
                })
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            }else{
                handleErrors(res as unknown as ErrorResponse)
            }
        }
    }
    return handleSubmit
}
export default loginLogic