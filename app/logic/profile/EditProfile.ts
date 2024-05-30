import handleErrors from "@/app/hooks/handleErrors";
import { useUpdateData } from "@/app/hooks/useUpdateData";
import { ErrorResponse, user, userResponse } from "@/app/types/types";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const EditProfileLogic = (user: user,token:string) => {
  const [name, setName] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [image, setImage] = useState(user?.image);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = useRef(new FormData())
  const imgSelctor = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      data.current.set("image",e.target.files[0])
    }
  };
  const changeName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
    data.current.set("username",e.target.value)
  }
  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
    data.current.set("email",e.target.value)
  }

  const reset = ()=>{
    setName(user?.username)
    data.current.delete("username")
    setEmail(user?.email)
    data.current.delete("email")
    setImage(user?.image)
    data.current.delete("image")
  }
  const editProfile = async()=>{
    const hasData = Array.from(data.current.entries()).length > 0;
    console.log(name);
    console.log(data.current.getAll("username"));
    if(!hasData){
        toast.warning("you didn't change your data")
    }else{
        setLoading(true)
        setIsOpen(true)
        const res = await useUpdateData<userResponse>(`/api/v1/user/${user?._id}`, data.current,token)
        setIsOpen(false)
        setLoading(false)
        if (res.status === "success") {
            toast.success("profile has been updated successfully", {
              className: "h-16 w-70 text-sm",
            });
            setIsOpen(false);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            handleErrors(res as unknown as ErrorResponse);
          }
    }
  }
  return {
    name,
    changeName,
    email,
    changeEmail,
    image,
    imgSelctor,
    isOpen,
    setIsOpen,
    loading,
    setLoading,
    reset,
    editProfile
  };
};
export default EditProfileLogic;
