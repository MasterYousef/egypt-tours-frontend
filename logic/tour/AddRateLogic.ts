import { useInsertData } from "@/hooks/useInsertData";
import { useState } from "react";
import { ErrorResponse, rateResponse } from "@/types/types";
import { toast } from "react-toastify";
import { useRouter, useParams  } from "next/navigation";
import handleErrors from "@/hooks/handleErrors";

const AddRateLogic = (token:string) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const {refresh} = useRouter()
  const params = useParams()
  const handleStarClick = (nextValue: number) => {
    setRating(nextValue);
  };
  const handleSubmit = async()=>{
    const tour = params.id
    if(rating<1){
      toast.warn("review must have rating")
      return
    }
    if(comment.length<2){
      toast.warn("review must have comment more than 2 character")
      return
    }
    setLoading(true)
    const res = await useInsertData<rateResponse>("/api/v1/rating",{
        tour,
        rate:rating,
        comment
    },token)
    setLoading(false)
    if(res.status === "success"){
      toast.success("The rating has been added successfully.")
      setTimeout(()=>{refresh()},2500)
    }else{
      handleErrors(res as unknown as ErrorResponse)
    }
  }
  return {rating,handleStarClick,setComment,handleSubmit,loading};
};

export default AddRateLogic;
