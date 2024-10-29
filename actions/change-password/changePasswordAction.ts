"use server";

import { useUpdateData } from "@/hooks/useUpdateData";
import GetUserAction from "../GetUserAction";
import { ErrorResponse, resMessage } from "@/types/types";

async function changePasswordAction(prevState: any, formData: FormData) {
  if (formData.get("newPassword") !== formData.get("confirmNewPassword")) {
    return { error: "please confirm your password" };
  }
  const { token } = await GetUserAction();
  const res = await useUpdateData<resMessage | ErrorResponse>(
    "/api/v1/auth/changePassword",
    {
      password: formData.get("Oldpassword"),
      newPassword: formData.get("newPassword"),
    },
    token
  );
  if ("status" in res) {
    if (res.status === "success") {
      return { success: "success please login again" };
    }
  } else if ("response" in res) {
    if (res.response.data.message) {
      return { error: res.response.data.message };
    } else {
      return { errors: res.response.data.errors };
    }
  }
}

export default changePasswordAction;
