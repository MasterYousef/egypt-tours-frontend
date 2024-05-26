import handleErrors from "@/app/hooks/handleErrors";
import { useInsertData } from "@/app/hooks/useInsertData";
import { signUpForm } from "@/app/types/auth";
import ErrorResponse from "@/app/types/error";
import user from "@/app/types/userResponse";
import { toast } from "react-toastify";

const signUpLogic = ()=>{
    type FormEventAlias = React.ChangeEvent<signUpForm> | React.FormEvent<HTMLFormElement>;
    const handleSubmit = async (e:FormEventAlias)=>{
        e.preventDefault();
        const formEvent = e as React.ChangeEvent<signUpForm>
        if(formEvent.target.password.value !== formEvent.target.passwordConfirm.value){
            toast.error("password Confirm not correct")
        }else{
            const data = {
                username: formEvent.target.name.value,
                email: formEvent.target.email.value,
                password: formEvent.target.password.value,
                role:"user"
            }
            const res = await useInsertData<user>("/api/v1/auth/signup",data) 
            if(res.status === "success"){
                toast.success("user has been created successfully",{
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
export default signUpLogic