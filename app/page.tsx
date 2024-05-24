import AboutTours from "./components/home/AboutTours";
import Auth from "./components/home/Auth";
import Features from "./components/home/Features";
import Landing from "./components/home/Landing";
import Tours from "./components/home/Tours";

export default function Home() {
  return (
    <main className="main" >
    <Landing/>
    <AboutTours/>
    <Features/>
    <Tours/>
    <Auth/>
    </main>
  );
}
