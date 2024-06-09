import AdminUpdateTourCard from '@/app/components/Admin-Tours/AdminUpdateTourCatd'
import useGetData from '@/hooks/useGetData'
import GetUserData from '@/logic/GetUserData'
import {  tour } from '@/types/types'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

async function page({params}:{params:Params}) {
    const res = await useGetData<tour>(`/api/v1/tour/${params.tour_id}`)
    const {token} = GetUserData()
    if(res.status === "success"){
      return (
        <div className=' main p-10 flex justify-center'>
            <AdminUpdateTourCard token={token} tour={res.data}/>
        </div>
      )
    }else{
      return null
    }
}

export default page