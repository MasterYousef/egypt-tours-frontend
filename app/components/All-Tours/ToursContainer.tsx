import { oneTour } from "@/types/types";
import TourCard from "../tours/TourCard";

async function ToursContainer({ tours }: { tours: oneTour[] }) {
  return (
    <div className="flex w-full justify-center items-center my-5 md:flex-row md:col-span-9 col-span-12">
      <div className="w-3/4 md:w-full flex flex-col md:flex-row justify-center md:justify-start flex-wrap">
        {tours ? (
          tours?.length >= 1 ? (
            tours.map((e, index) => (
              <TourCard tour={e} key={index} />
            ))
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
export default ToursContainer