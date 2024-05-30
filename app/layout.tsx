import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.css';
import "@/style/globals.css";
import Footer from "./components/utils/Footer";
import { ToastContainer } from "react-toastify";
import AdminMenu from "./components/utils/AdminMenu";
import UserMenu from "./components/utils/UserMenu";
import Menu from "./components/utils/Menu";
import GetUserData from "./logic/GetUserData";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Egypt Tours",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {user} = GetUserData()
  return (
    <html lang="en">        
      <body className={`${inter.className} `}>
        <div className=' lg:m-8 overflow-hidden '>
          {user ? (user?.role === "admin"  ? <AdminMenu /> : <UserMenu />) : <Menu />}
        {children}
        <Footer/>
      </div>
      <ToastContainer/>
        </body>
    </html>
  )
}
