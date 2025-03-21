import { useEffect, useRef, useState } from "react";
import { ErrorResponse, tour, tourForm } from "@/types/types";
import { useInsertData } from "@/hooks/useInsertData";
import { toast } from "react-toastify";
import handleErrors from "@/hooks/handleErrors";
import GetUserAction from "@/actions/GetUserAction";
import { useRouter } from "next/navigation";
const createTourLogic = () => {
  const MAX_SIZE = 4.5 * 1024 * 1024;
  const [token, settoken] = useState("");
  const [loading, setLoading] = useState(false);
  const { refresh } = useRouter();
  const [selected, setSelected] = useState(new Date());
  const [images, setImages] = useState<string[]>([]);
  const [file, setFile] = useState<File[]>([]);
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
      event.target.name.value === "" ||
      event.target.description.value === "" ||
      event.target.price.value === "" ||
      event.target.maxPeople.value === "" ||
      event.target.guides.value === "" ||
      event.target.duration.value === "" ||
      file.length <= 0
    ) {
      toast.warning("Please fill in all information");
    } else {
      const hasLargeFile = await file.some((f) => {
        if (f.size > MAX_SIZE) {
          console.log(`File ${f.name} is too large.`);
          return true;
        }
        return false;
      });
      if (hasLargeFile) {
        toast.error("File size is too large");
      } else if (!hasLargeFile) {
        setLoading(true);
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
        file.map((im, index) => { {
            if (!data.current.getAll("images").includes(im)) {
              data.current.append("images", im);
            }
          }
        });
        const res = await useInsertData<tour>(
          "/api/v1/tour",
          data.current,
          token
        );
        setLoading(false);
        if (res.status === "success") {
          toast.success("tour created successfully");
          event.target.name.value = "" 
          event.target.description.value = "" 
          event.target.price.value = "" 
          event.target.maxPeople.value = "" 
          event.target.guides.value = "" 
          event.target.duration.value = "" 
          setImages([])
          setFile([])
          setSelected(new Date())
          setTimeout(() => {
            refresh();
          }, 1500);
        } else {
          
          handleErrors(res as unknown as ErrorResponse);
        }
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
    handleSubmit,
    setDate,
    file,
    setFile,
    data,
    images,
    setImages,
    loading,
  };
};
export default createTourLogic;
