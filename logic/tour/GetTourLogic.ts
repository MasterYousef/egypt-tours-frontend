import useGetData from '@/hooks/useGetData';
import { tour } from '@/types/types';

export async function GetTourLogic(id: string) {
  const res = await useGetData<tour>(`/api/v1/tour/${id}`);
  if (res.status === 'success') {
    return res.data;
  } else {
    throw new Error("can't find this tour");
  }
}
