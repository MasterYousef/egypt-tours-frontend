import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/style/globals.css";
import Footer from "./components/utils/Footer";
import AdminMenu from "./components/utils/AdminMenu";
import UserMenu from "./components/utils/UserMenu";
import Menu from "./components/utils/Menu";
import GetUserAction from "@/actions/GetUserAction";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Egypt Tours",
  description: `Discover the wonders of ancient Egypt with our comprehensive tour packages.
     Experience iconic landmarks, luxury accommodations,
      and expert-guided tours through historic sites like the Pyramids, Luxor
      , and the Nile River. Book your unforgettable Egyptian adventure today!`,
  icons: {
    icon: "/image/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = GetUserAction();
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className=" lg:m-8 overflow-hidden ">
          {user ? (
            user?.role === "admin" ? (
              <AdminMenu />
            ) : (
              <UserMenu />
            )
          ) : (
            <Menu />
          )}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
