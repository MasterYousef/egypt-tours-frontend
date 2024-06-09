import handleErrors from "@/hooks/handleErrors";
import { useInsertData } from "@/hooks/useInsertData";
import { ErrorResponse, resMessage } from "@/types/types";
import { useState } from "react";
import { toast } from "react-toastify";
const verfiyCodeLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const handleSubmit = async () => {
    if (code === "" || code.length < 6) {
      toast.error("please enter the full code ");
    } else {
      const email = localStorage.getItem("email");
      setIsOpen(true);
      const res = await useInsertData<resMessage>("/api/v1/auth/resetCode", {
        email,
        code: parseInt(code, 10),
      });
      setIsOpen(false);
      if (res.status === "success") {
        toast.success(res.message);
        setTimeout(() => {
          window.location.href = "change-password";
        }, 3000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  return { isOpen, setIsOpen, setCode, handleSubmit };
};
export default verfiyCodeLogic;
