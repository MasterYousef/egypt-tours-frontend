import AddCouponAction from '@/actions/coupon/AddCouponAction';
import handleErrors from '@/hooks/handleErrors';
import { ErrorResponse } from '@/types/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

function AddCouponLogic() {
    const [date,setDate] = useState<Date>()
    const [state, formAction] = useFormState(AddCouponAction,undefined)
    const {refresh} = useRouter()
    useEffect(() => {
      if (state?.error) {
        if (state?.error === "jwt malformed") {
          handleErrors(state?.error as unknown as ErrorResponse);
        } else {
          toast.error(state?.error);
        }
      } else if (state?.errors) {
        handleErrors({ response: { data: { errors: state?.errors } } });
      } else if (state?.success) {
        toast.success(state?.success);
        setTimeout(() => {
          refresh();
        }, 1000);
      }
    }, [state]);
  return {date,setDate,formAction}
}

export default AddCouponLogic