import Image from "next/image";
import React from "react";
import GetUserAction from "@/actions/GetUserAction";
import Title from "../components/utils/Title";
import Edit from "./EditProfile";
import "@/style/profile.css";

async function page() {
  const { user, token } = GetUserAction();
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
        <p className="my-16 text-xl font-serif">you didn't book any tour yet</p>
      </div>
    </div>
  );
}

export default page;
