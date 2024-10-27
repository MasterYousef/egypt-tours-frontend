import Image from "next/image";
import React from "react";
import GetUserAction from "@/actions/GetUserAction";
import Title from "../components/utils/Title";
import "@/style/profile.css";
import Edit from "../components/profile/EditProfile";
// import GetBookedTours from "@/logic/profile/GetBookedTours";
// import TourCard from "../components/tours/TourCard";
// import AdminBookedTours from "../components/profile/AdminBookedTours";
import { redirect } from "next/navigation";

async function page() {
  const { user, token } = await GetUserAction();
  if(token){
    // const res = await GetBookedTours(user._id, token, user.role);
    return (
      <div className="main p-10">
        <div className="w-full flex flex-col p-5 profile rounded justify-center items-center mb-10 ">
          <Image
            src={user?.image}
            width={1000}
            height={1000}
            className="w-40 h-40 rounded-full "
            alt={""}
          />
          <div className="mt-5 flex flex-col items-center">
            <p className="text-2xl font-bold mb-3">{user?.username}</p>
            <p className="mb-5">{user?.email}</p>
          </div>
          <Edit user={user} token={token} />
        </div>
        <div className="w-full flex flex-col items-center">
          <Title text={"Booked tours"} />
          <div className="w-full my-5 flex flex-wrap">
            {/* {res.result >= 1 ? (
              user.role === "admin" ? res.data.map((e) => <AdminBookedTours order={e} token={token}/>) : (
                res.data.map((e) => <TourCard tour={e.tour} />)
              )
            ) : (
              <p className="my-16 text-xl font-serif text-center w-full">
                you didn't book any tour yet
              </p>
            )} */}
          </div>
        </div>
      </div>
    );
  }else{
    redirect("/")
  }
}

export default page;
