import { useRef, useState } from "react";
import im from "/public/image/h2.png";
import { ErrorResponse, tour, tourForm } from "@/types/types";
import { useInsertData } from "@/hooks/useInsertData";
import { toast } from "react-toastify";
import handleErrors from "@/hooks/handleErrors";
const createTourLogic = (token: string) => {
  const [selected, setSelected] = useState(new Date());
  const [img, setImg] = useState(im.src);
  const data = useRef(new FormData());
  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      data.current.set("imageCover", e.target.files[0]);
    }
  };
  const setDate = (date: Date) => {
    setSelected(date);
  };
  const handleSubmit = async (
    e: React.ChangeEvent<tour> | React.FormEvent<HTMLFormElement>
  ) => {
    const event = e as unknown as React.ChangeEvent<tourForm>;
    e.preventDefault();
    if (
      event.target.name.value === "" ||
      event.target.description.value === "" ||
      event.target.price.value === "" ||
      event.target.maxPeople.value === "" ||
      event.target.guides.value === "" ||
      event.target.duration.value === "" ||
      img === im.src
    ) {
      toast.warning("Please fill in all information");
    } else {
      data.current.set("title", event.target.name.value);
      data.current.set("description", event.target.description.value);
      data.current.set("price", event.target.price.value);
      data.current.set("maxPeople", event.target.maxPeople.value);
      data.current.set("guides", event.target.guides.value);
      data.current.set(
        "start",
        selected.toLocaleDateString("en-GB").split("/").reverse().join("-")
      );
      data.current.set("duration", event.target.duration.value);
      const res = await useInsertData<tour>(
        "/api/v1/tour",
        data.current,
        token
      );
      if (res.status === "success") {
        toast.success("tour created successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  return { selected, setSelected, img, changeImg, handleSubmit, setDate };
};
export default createTourLogic;
