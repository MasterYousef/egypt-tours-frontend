import handleErrors from "@/hooks/handleErrors";
import useDeleteData from "@/hooks/useDeleteData";
import { useUpdateData } from "@/hooks/useUpdateData";
import { ErrorResponse, rateResponse, reviews } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function ReviewCardLogic(
  review: rateResponse["data"],
  role: string = "user",
  token: string = ""
) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [comment, setComment] = useState(review.comment);
  const [rate, setRate] = useState(review.rate);
  const { refresh } = useRouter();
  const confirmDelete = async () => {
    setOpen(true);
    setLoading(true);
    const res =
      role === "admin"
        ? await useDeleteData<{ name: string }>(
            `/api/v1/rating/admin/${review._id}`,
            token
          )
        : await useDeleteData<{ name: string }>(
            `/api/v1/rating/${review._id}`,
            token
          );
    setLoading(false);
    setOpen(false);
    if (res.name !== "AxiosError") {
      toast.success("rating deleted succesfly");
      setTimeout(() => {
        refresh();
      }, 2000);
    } else {
      handleErrors(res as unknown as ErrorResponse);
    }
  };
  const handleUpdate = async () => {
    if (rate <= 0) {
      toast.error("rate must be greater than 0");
      return;
    }
    if (comment.length <= 2) {
      toast.error("comment must be greater than 2 letters");
      return;
    }
    setLoading(true);
    const res = await useUpdateData<reviews>(`/api/v1/rating/${review._id}`,{comment,rate},token)
    if(res.status === "success"){
        toast.success("Rating updated successfully")
        setTimeout(() => {
            refresh()
        }, 2000);
    }else{
        handleErrors(res as unknown as ErrorResponse)
    }
  };
  return {
    open,
    setOpen,
    loading,
    confirmDelete,
    update,
    setUpdate,
    setComment,
    setRate,
    handleUpdate,
  };
}

export default ReviewCardLogic;
