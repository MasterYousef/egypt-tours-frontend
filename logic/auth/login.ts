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
      console.log(res);
      if (res.status === "success") {
        await fetch("/api/set-cookies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: res.token,
            user: res.user,
          }),
          credentials: "include",
        });
        toast.success("user has been login successfully", {
          className: "h-16 w-70 text-sm",
          autoClose: 1500,
        });
        setIsOpen(false);
        window.scrollTo(0, 0);
        setTimeout(() => {
          refresh();
        }, 1000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  return { handleSubmit, isOpen, setIsOpen };
};
export default loginLogic;
