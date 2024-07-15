import Title from "@/app/components/utils/Title";
import "@/style/tour.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import CardDetails from "@/app/components/tour/CardDetails";
import Reviews from "@/app/components/tour/Reviews";
import { GetTourLogic } from "@/logic/tour/GetTourLogic";


async function page({ params,searchParams }: { params: Params,searchParams:{page:number} }) {
  const tour = await GetTourLogic(params.id);
    return (
      <div className="main p-10 min-h-screen">
        <div className=" text-center overflow-hidden">
          <Title text={tour.title} />
          <p className="mt-5 mx-5">{tour.description}</p>
        </div>
          <CardDetails tour={tour}/>
          <Reviews page={searchParams.page} tour={params.id}/>
      </div>
    );
  }

export default page;
