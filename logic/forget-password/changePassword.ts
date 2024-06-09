import handleErrors from "@/hooks/handleErrors";
import { useInsertData } from "@/hooks/useInsertData";
import { ErrorResponse, resMessage } from "@/types/types";
import { useState } from "react";
import { toast } from "react-toastify";

const changePasswordLogic = () => {
  interface changePassword {
    password: HTMLFormElement;
    passwordConfirm: HTMLFormElement;
  }
  type FormEventAlias =
    | React.ChangeEvent<changePassword>
    | React.FormEvent<HTMLFormElement>;
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (e: FormEventAlias) => {
    e.preventDefault();
    const event = e as React.ChangeEvent<changePassword>;
    if (event.target.password.value !== event.target.passwordConfirm.value) {
      toast.error("password Confirm not correct");
    } else {
      const data = {
        email: localStorage.getItem("email"),
        password: event.target.password.value,
      };
      setIsOpen(true);
      const res = await useInsertData<resMessage>(
        "/api/v1/auth/resetPassword",
        data
      );
      setIsOpen(false);
      if (res.status === "success") {
        toast.success(res.message);
        setTimeout(() => {
          localStorage.removeItem("email");
          window.location.href = "/";
        }, 3000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
        localStorage.removeItem("email");
      }
    }
  };
  return { isOpen, setIsOpen, handleSubmit };
};
export default changePasswordLogic;
