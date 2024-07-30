import ApplyCouponAction from "@/actions/tour/ApplyCouponAction";
import BookTourAction from "@/actions/tour/BookTourAction";
import handleErrors from "@/hooks/handleErrors";
import useGetData from "@/hooks/useGetData";
import { ErrorResponse } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

function CardDetailsLogic() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const [state, formAction] = useFormState(ApplyCouponAction, undefined);
  const hasCalledHandlePayment = useRef(false);  // Add a flag
  const isMounted = useRef(true);  // Track if the component is mounted

  const BookTour = async (tour: string, price: number) => {
    let data: { tour: string; price: number; coupon?: string } = { tour, price };
    if (coupon !== "") {
      data.coupon = coupon;
    }
    setOpen(true);
    setLoading(true);
    const res = await BookTourAction(data);
    setLoading(false);
    setOpen(false);
    if (res?.error) {
      if (res?.error === "jwt malformed") {
        handleErrors(res?.error as unknown as ErrorResponse);
      } else {
        toast.error(res?.error);
      }
    }
    if (res?.errors) {
      handleErrors({ response: { data: { errors: res?.errors } } });
    }
    if (res?.success) {
      router.push(res.url);
    }
  };

  const handlePayment = async () => {
    const paymentId = params.get("paymentId");
    setLoading(true);
    setOpen(true);
    const res = await useGetData<{ status: string }>(`/api/v1/order/webhook?paymentId=${paymentId}`);
    setOpen(false);
    setLoading(false);
    if (!isMounted.current) return;  // Avoid state updates if the component is unmounted
    if (res.status === "success") {
        if (!toast.isActive("expiredToken"))  { toast.success("Tour booked successfully", { toastId: "success" }); }
    } else {
      handleErrors(res as unknown as ErrorResponse);
    }
    isMounted.current = false; 
  };

  useEffect(() => {
    if (state?.error) {
      if (state?.error === "jwt malformed") {
        handleErrors(state?.error as unknown as ErrorResponse);
      } else {
        toast.error(state?.error);
      }
    }
    if (state?.errors) {
      handleErrors({ response: { data: { errors: state?.errors } } });
    }
    if (state?.success) {
      setDiscount(state.discount);
      setCoupon(state.coupon);
      setOpen(false);
      setTimeout(() => {
        if (isMounted.current) toast.success(state.success);
      }, 250);
    }
    if (params.get("success") !== null && params.get("paymentId") !== null && !hasCalledHandlePayment.current) {
      handlePayment();
      hasCalledHandlePayment.current = true; 
    }
  }, [state, params]);

  return { open, setOpen, formAction, discount, BookTour, loading };
}

export default CardDetailsLogic;



