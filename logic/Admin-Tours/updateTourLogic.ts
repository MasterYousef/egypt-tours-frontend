import { useEffect, useRef, useState } from "react";
import { ErrorResponse, oneTour, tour, tourForm } from "@/types/types";
import { toast } from "react-toastify";
import handleErrors from "@/hooks/handleErrors";
import { useUpdateData } from "@/hooks/useUpdateData";
import { useRouter } from "next/navigation";
import useGetData from "@/hooks/useGetData";
import GetUserAction from "@/actions/GetUserAction";

function updateTourLogic(id: string) {
  const [token, settoken] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [tour, setTour] = useState<oneTour>({} as oneTour);
  const [selected, setSelected] = useState<Date>(new Date());
  const { refresh } = useRouter();
  const data = useRef(new FormData());
  const setDate = (date: Date) => {
    setSelected(date);
  };
  const handleSubmit = async (
    e: React.ChangeEvent<tour> | React.FormEvent<HTMLFormElement>
  ) => {
    const event = e as unknown as React.ChangeEvent<tourForm>;
    e.preventDefault();
    if (
      (event.target.name.value === tour.title &&
        event.target.description.value === tour.description &&
        event.target.price.value === tour.price.toString() &&
        event.target.maxPeople.value === tour.maxPeople.toString() &&
        event.target.guides.value === tour.guides.toString() &&
        event.target.duration.value === tour.duration.toString() &&
        images === tour.images &&
        selected.toString() === tour.start) ||
      images?.length <= 0 ||
      event.target.name.value === "" ||
      event.target.description.value === "" ||
      event.target.price.value === "" ||
      event.target.duration.value === "" ||
      event.target.guides.value === "" ||
      event.target.maxPeople.value === ""
    ) {
      toast.warning("Please fill information to update tour");
    } else {
      data.current.set("title", event.target.name.value);
      data.current.set("description", event.target.description.value);
      data.current.set("price", event.target.price.value);
      data.current.set("maxPeople", event.target.maxPeople.value);
      data.current.set("guides", event.target.guides.value);
      data.current.set("duration", event.target.duration.value);
      if (selected.toString() !== tour.start) {
        data.current.set(
          "start",
          selected.toLocaleDateString("en-GB").split("/").reverse().join("-")
        );
      }
      if (tour.images) {
        images.forEach((im) => {
          if (!im.startsWith("blob:")) {
            data.current.append("images", im);
          }
        });
        file.forEach((f) => {
          if (
            !data.current.getAll("images").includes(f) &&
            f.name !== "none.png"
          ) {
            data.current.append("images", f);
          }
        });
      }
      setLoading(true)
      const res = await useUpdateData<tour>(
        `/api/v1/tour/${tour._id}`,
        data.current,
        token
      );
      setLoading(false)
      if (res.status === "success") {
        toast.success("tour updated successfully");
        setTimeout(() => {
          refresh();
        }, 1000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  const setData = async () => {
    const res = await useGetData<tour>(`/api/v1/tour/${id}`);
    if (res.status === "success") {
      setTour(res.data);
      setImages(res.data.images);
      setSelected(res.data.start as unknown as Date);
      const createFileFromString = (text: string, fileName = "none.png") => {
        const file = new File([text], fileName, { type: "text/plain" });
        return file;
      };
      const files = res.data.images.map((_) => {
        const file = createFileFromString("none");
        return file;
      });
      setFile(files);
    }
    const { token } = await GetUserAction();
    if (token) {
      settoken(token);
    }
  };
  useEffect(() => {
    setData();
  }, []);
  return {
    selected,
    setSelected,
    handleSubmit,
    setDate,
    tour,
    file,
    setFile,
    images,
    setImages,
    loading,
    setLoading,
  };
}

export default updateTourLogic;
