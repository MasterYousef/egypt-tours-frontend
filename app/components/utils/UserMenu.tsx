"use client";
import useLogOut from "@/hooks/useLogOut";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const logout = async () => {
    await useLogOut();
    router.replace("/")
    router.refresh()
  };
  return (
    <>
      <div
        className={`menu-color fixed p-5 w-12 h-12 ease-in-out duration-500 right-11 top-3.5 lg:top-11 my-1 z-40
     ${
       isOpen === true ? " scale-150 rounded-none full-scale" : " rounded-full"
     }`}
      ></div>
      <div
        className="bg-white px-1 fixed rounded-full cursor-pointer right-10 lg:top-11 top-3.5 hover:scale-125 ease-in-out duration-300 z-50"
        onClick={toggle}
      >
        {isOpen === true ? (
          <i className="fa-solid fa-xmark p-4 text-2xl"></i>
        ) : (
          <i className="fa-solid fa-user p-4 text-2xl"></i>
        )}
      </div>
      <div
        className={`flex flex-col justify-center w-screen h-screen items-center z-40 text-4xl
    fixed top-1/2  -translate-x-1/2 -translate-y-1/2 ease-in-out duration-500 ${
      isOpen && true ? "left-1/2" : "-left-1/2"
    }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="mb-3 py-2 px-3 hov1"
        >
          home
        </Link>
        <Link
          href="/Profile"
          onClick={() => setIsOpen(false)}
          className="mb-3 py-2 px-3 hov1 "
        >
          Profile
        </Link>
        <Link
          href="/All-Tours"
          onClick={() => setIsOpen(false)}
          className="mb-3 py-2 px-3 hov1"
        >
          All tours
        </Link>
        <button onClick={() => logout()} className="mb-3 py-2 px-3 hov1">
          Log Out
        </button>
      </div>
    </>
  );
}

export default UserMenu;
