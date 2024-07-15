import { useEffect, useRef, useState } from "react";
import im from "/public/image/h2.png";
import { ErrorResponse, tour, tourForm } from "@/types/types";
import { useInsertData } from "@/hooks/useInsertData";
import { toast } from "react-toastify";
import handleErrors from "@/hooks/handleErrors";
import GetUserAction from "@/actions/GetUserAction";
import { useRouter } from "next/navigation";
const createTourLogic = () => {
  const [token, settoken] = useState("");
  const { refresh } = useRouter();
  const [selected, setSelected] = useState(new Date());
  const [images, setImages] = useState<string[]>([]);
  const [file, setFile] = useState<File[]>([]);
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
      file.map((im) => {
        if(!data.current.getAll("images").includes(im)){
          data.current.append("images", im);
        }
      });
      const res = await useInsertData<tour>(
        "/api/v1/tour",
        data.current,
        token
      );
      if (res.status === "success") {
        toast.success("tour created successfully");
        setTimeout(() => {
          refresh();
        }, 2000);
      } else {
        handleErrors(res as unknown as ErrorResponse);
      }
    }
  };
  const getToken = async () => {
    const { token } = await GetUserAction();
    if (token) {
      settoken(token);
    }
  };
  useEffect(() => {
    getToken();
  });
  return {
    selected,
    setSelected,
    img,
    changeImg,
    handleSubmit,
    setDate,
    file,
    setFile,
    data,
    images,
    setImages
  };
};
export default createTourLogic;
