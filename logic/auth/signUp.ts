import handleErrors from "@/hooks/handleErrors";
import { useInsertData } from "@/hooks/useInsertData";
import { ErrorResponse, signUpForm, userResponse } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const signUpLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { refresh } = useRouter();
  type FormEventAlias =
    | React.ChangeEvent<signUpForm>
    | React.FormEvent<HTMLFormElement>;
  const handleSubmit = async (e: FormEventAlias) => {
    e.preventDefault();
    const formEvent = e as React.ChangeEvent<signUpForm>;
    if (
      formEvent.target.password.value !== formEvent.target.passwordConfirm.value
    ) {
      toast.error("password Confirm not correct");
    } else {
      const data = {
        username: formEvent.target.name.value,
        email: formEvent.target.email.value,
        password: formEvent.target.password.value,
        role: "user",
      };
      setIsOpen(true);
      const res = await useInsertData<userResponse>(
        "/api/v1/auth/signup",
        data
      );
      if (res.status === "success") {
        toast.success("user has been created successfully", {
          className: "h-16 w-70 text-sm",
        });
        setIsOpen(false);
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
export default signUpLogic;
