import { oneTour, query, tourResponse } from "@/types/types";
import AdminToursContainer from "../components/Admin-Tours/AdminToursContainer";
import ToursSearchOptions from "../components/tours/ToursSearchOptions";
import getToursAction from "@/actions/getToursAction";
import Pagination from "../components/tours/pagination";
async function page({searchParams}:{searchParams?:{
  query?:string,
  page?:string,
}}) {
  const query = searchParams as query
  const {data,paginationResult} =await getToursAction(6,query) as tourResponse
  return (
    <div className="py-5 pt-20 md:px-5 bg-gray-200 grid grid-cols-12">
      <ToursSearchOptions/>
      <AdminToursContainer tours={data}/>
      <Pagination pagination={paginationResult} />
    </div>
  );
}

export default page
