"use client"
import AddCouponLogic from "@/logic/coupon/AddCouponLogic";
import ReactDatePicker from "react-datepicker";
import Submit from "../utils/Submit";
import { ToastContainer } from "react-toastify";

function AddCoupon() {
const logic = AddCouponLogic()
  return (
    <div className='w-1/2 flex justify-end h-screen mt-16'>
    <form className='my-3 flex flex-col w-1/2' action={logic.formAction}>
      <input required name='name' maxLength={30} minLength={2} type='text' placeholder='coupon name' className='p-1 my-2 focus-within:outline-amber-400 text-center'/>
      <input required name='discount' max="100" min={5} type='number' placeholder='discount' className='p-1 my-2 focus-within:outline-amber-400 text-center'/>
      <ReactDatePicker
              placeholderText='expire Date'
              selected={logic.date}
              onChange={(date:Date)=>logic.setDate(date)}
              dateFormat="dd/MM/yyyy"
              required
              name='expire'
              className=" text-center cursor-pointer text-xl p-1 my-2 focus-within:outline-amber-400 w-full"
            />
      <Submit text='Add coupon' className='btn p-1'/>
    </form>
    <ToastContainer/>
    </div>
  )
}

export default AddCoupon