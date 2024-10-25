import { toast } from "react-toastify";
import { ErrorResponse } from "../types/types";

const handleErrors = (error: ErrorResponse) => {  
  if (error.response) {
    if (error.response.data.errors) {
      error.response.data.errors.forEach((e) => {
        if (!toast.isActive("expiredToken"))  { toast.error(e.msg , { toastId: "expiredToken" }); }
      });
    } else if (error.response.data.message) {
      if (!toast.isActive("expiredToken"))  { toast.error(error.response.data.message , { toastId: "expiredToken" }); }
    }
  } else {
    toast.error("error please try again latter");
  }
};
export default handleErrors;
