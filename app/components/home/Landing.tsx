"use client";
import Image from "next/image";
import "@/style/home.css";
import im from "/public/image/h1.png";
import logo from "/public/image/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="relative h-96 md:h-screen mb-52 md:mb-16">
      <div className="w-full bg-yellow-300 overlay absolute z-10"></div>
      <Image
        src={logo.src}
        width={50}
        height={50}
        className="absolute z-20 w-28 h-20 p-5"
        alt=""
      />
      <Image
        src={im.src}
        width={5000}
        height={50}
        className="w-full absolute img-clip"
        alt=""
      />
      <div className="flex absolute flex-col justify-center items-center z-20 left-1/2 -translate-x-1/2 top-32 w-full text-center">
        <motion.h2
          className="tracking-widest h2 text-5xl md:text-6xl lg:text-7xl font-medium head-space"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: "0%", opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
          transition={{ duration: 0.7 }}
        >
          OUTDOORS
        </motion.h2>
        <motion.h3
          className="md:text-2xl lg:text-3xl font-normal my-6 tracking-widest text-xl"
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: "0%", opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
          transition={{ duration: 0.7 }}
        >
          IS WHERE LIFE HAPPENS
        </motion.h3>
        <Link href="/All-Tours" className="text-3xl mt-10 hov2 p-2">
          DISCOVER OUR TOURS
        </Link>
      </div>
    </div>
  );
}

export default Landing;
