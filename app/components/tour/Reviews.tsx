import GetUserAction from "@/actions/GetUserAction";
import AddRate from "./AddRate";
import useGetData from "@/hooks/useGetData";
import { reviews } from "@/types/types";
import ReviewCard from "./ReviewCard";
import { cookies } from "next/headers";
import Pagination from "../tours/pagination";

async function Reviews({tour,page=1}:{tour:string,page:number}) {
  const { user, token } = await GetUserAction();
  const limit = 5
  const reviews = await useGetData<reviews>(
    `/api/v1/tour/${tour}/ratings?limit=${limit}&page=${page}`
  );
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-5">Reviews</h1>
      <div className="flex flex-wrap justify-center items-center bg-white">
        {user && user.role !== "admin" ? <AddRate user={user} token={token} /> : null}
        {reviews.status === "success" && reviews.data.length >= 1 ? (
          reviews.data.map((review) => (
            <ReviewCard key={review._id} review={review} user={user} token={token} />
          ))
        ) : (
          <p className="text-center text-xl font-bold my-5">No reviews yet</p>
        )}
        {
          reviews.paginationResult ? <Pagination pagination={reviews.paginationResult}/> : null
        }
        
      </div>
    </div>
  );
}

export default Reviews;
