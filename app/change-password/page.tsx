"use client";
import Title from "../components/utils/Title";
import { useEffect } from "react";
import changePasswordAction from "@/actions/change-password/changePasswordAction";
import { useFormState } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import handleErrors from "@/hooks/handleErrors";
import { useRouter } from "next/navigation";
import { ErrorResponse } from "@/types/types";
import useLogOut from "@/hooks/useLogOut";
import Submit from "../components/utils/Submit";

function page() {
  const [state, formAction] = useFormState(changePasswordAction, undefined);
  const router = useRouter();
  useEffect(() => {
    console.log(state);
    if (state?.error) {
      if (state?.error === "jwt malformed") {
        handleErrors(state?.error as unknown as ErrorResponse);
      } else {
        toast.error(state?.error);
      }
    } else if (state?.errors) {      
      handleErrors({ response: { data: { errors: state?.errors } } });
    } else if (state?.success) {
      toast.success(state?.success);
      setTimeout(() => {
        useLogOut();
        router.replace("/")
      }, 2000);
    }
  }, [state]);
  return (
    <div className="py-5 h-screen pt-20 md:px-5 main flex justify-center items-center">
      <div className="flex flex-col justify-center px-16 py-12 mb-12 bg-white w-full md:w-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm my-3">
          <Title text="change password" />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={formAction}>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                new Password
              </label>
              <div className="mt-2">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="password"
                  required
                  className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                confirm new Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  autoComplete="password"
                  required
                  className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Oldpassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  old Password
                </label>
                <div className="text-sm">
                  <a href="/forget-password" className="font-bold title">
                    Forgot password ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="Oldpassword"
                  name="Oldpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <Submit text="submit" className="w-full px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"/>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default page;
