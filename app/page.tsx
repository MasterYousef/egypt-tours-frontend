import { ToastContainer } from "react-toastify";
import AboutTours from "./components/home/AboutTours";
import Auth from "./components/home/Auth";
import Features from "./components/home/Features";
import Landing from "./components/home/Landing";
import Tours from "./components/home/Tours";
import GetUserData from "./logic/GetUserData";
export default function Home() {
  const {user} = GetUserData()
  return (
    <main className="main" >
    <Landing/>
    <AboutTours/>
    <Features/>
    <Tours/>
    {user ? null : <Auth/>}
    <ToastContainer/>
    </main>
  );
}
