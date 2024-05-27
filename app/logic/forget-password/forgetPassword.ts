import handleErrors from "@/app/hooks/handleErrors";
import { useInsertData } from "@/app/hooks/useInsertData";
import { ErrorResponse, resMessage } from "@/app/types/types";
import { useState } from "react";
import { toast } from "react-toastify";
interface email {
  email: HTMLInputElement;
}
const forgetPasswordLogic = () => {
    const [isOpen,setIsOpen] = useState(false)
  const handleSubmit = async (
    e: React.ChangeEvent<email> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const event = e as React.ChangeEvent<email>;
    if (event.target.email.value) {
      const data = {
        email: event.target.email.value,
      };
      setIsOpen(true)
      const res = await useInsertData<resMessage>(
        "/api/v1/auth/forgetPassword",
        data
      );
      setIsOpen(false)
      if (res.status === "success") {
        localStorage.setItem("email",event.target.email.value)
        toast.success(res.message);
        setTimeout(() => {
          window.location.href = "forget-password/verfiy-code";
        }, 3000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  return {handleSubmit,isOpen,setIsOpen}
};
export default forgetPasswordLogic;
