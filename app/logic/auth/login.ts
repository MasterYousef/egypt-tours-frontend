import handleErrors from "@/app/hooks/handleErrors";
import { useInsertData } from "@/app/hooks/useInsertData";
import { ErrorResponse, loginForm, userResponse } from "@/app/types/types";
import { useState } from "react";
import { toast } from "react-toastify";

const loginLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (
    e: React.ChangeEvent<loginForm> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const event = e as React.ChangeEvent<loginForm>;
    if (event.target.password.value) {
      const data = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      setIsOpen(true);
      const res = await useInsertData<userResponse>("/api/v1/auth/login", data);
      setIsOpen(false);
      if (res.status === "success") {
        toast.success("user has been login successfully", {
          className: "h-16 w-70 text-sm",
        });
        setIsOpen(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  return {handleSubmit,isOpen,setIsOpen};
};
export default loginLogic;
