import { oneTour } from "@/types/types";
import AdminTourCard from "./AdminTourCard";
import GetUserData from "@/logic/GetUserData";


async function AdminToursContainer({tours}:{tours:oneTour[]}) {
    const {token} = await GetUserData()
  return (
    <div className="flex w-full justify-center my-5 md:flex-row md:col-span-9 col-span-12">
      <div className="w-3/4 md:w-full flex flex-col md:flex-row justify-center md:justify-start flex-wrap">
        {tours ? (
          tours?.length >= 1 ? (
            tours.map((e, index) => <AdminTourCard tour={e} user={token} key={index} />)
          ) : (
            <div className="w-full h-full flex items-center justify-center font-semibold text-2xl">
              No Tours Avilable
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}

export default AdminToursContainer;
