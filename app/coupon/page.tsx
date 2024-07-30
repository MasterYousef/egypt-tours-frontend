import React, { useEffect } from "react";
import Title from "../components/utils/Title";
import couponLogic from "@/logic/coupon/couponLogic";
import AddCoupon from "../components/coupon/AddCoupon";
import CouponCard from "../components/coupon/CouponCard";
import GetUserAction from "@/actions/GetUserAction";
import Pagination from "../components/tours/pagination";

async function page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const { token } = GetUserAction();
  const page = (searchParams?.page as unknown as number) * 1;
  const logic = await couponLogic(token, page);
  return (
    <div className="main flex flex-col-reverse lg:flex-row p-5">
      <div className="lg:w-1/2 w-full mt-16">
        <Title text="coupons" />
        {logic.coupons?.data.length ? (
          logic.coupons.data.map((coupon) => <CouponCard coupon={coupon} token={token} />)
        ) : (
          <p>no coupons yet</p>
        )}
        {logic.coupons?.paginationResult ? (
          <Pagination pagination={logic.coupons.paginationResult} />
        ) : null}
      </div>
      <AddCoupon />
    </div>
  );
}

export default page;
