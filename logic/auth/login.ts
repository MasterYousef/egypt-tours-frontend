import handleErrors from "@/hooks/handleErrors";
import { useInsertData } from "@/hooks/useInsertData";
import { ErrorResponse, loginForm, userResponse } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const loginLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { refresh } = useRouter();
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
          autoClose:1000
        });
        setIsOpen(false);
        window.scrollTo(0,0)
        setTimeout(() => {
          refresh();
        },1200);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  return { handleSubmit, isOpen, setIsOpen };
};
export default loginLogic;
