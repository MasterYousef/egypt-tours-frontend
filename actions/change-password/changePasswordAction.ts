"use server";

import { useUpdateData } from "@/hooks/useUpdateData";
import GetUserAction from "../GetUserAction";
import { ErrorResponse, resMessage } from "@/types/types";
import axios from "axios";

async function changePasswordAction(prevState: any, formData: FormData) {
  if (formData.get("newPassword") !== formData.get("confirmNewPassword")) {
    return { error: "please confirm your password" };
  }
  const { token } = await GetUserAction();
const res = await axios.put<resMessage | ErrorResponse>(
    "/api/v1/auth/changePassword",
    {
      password: formData.get("Oldpassword"),
      newPassword: formData.get("newPassword"), 
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log(res);
if ("data" in res && "status" in res.data) {
    if (res.data.status === "success") {
      return { success: "success please login again" };
    }
} else if (axios.isAxiosError(res)) {
    if (res.response?.data.message) {
      return { error: res.response.data.message };
    } else if (res.response?.data.errors) {
      return { errors: res.response.data.errors };
    }
  }
}

export default changePasswordAction;
