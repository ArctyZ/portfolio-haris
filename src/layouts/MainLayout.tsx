import { Outlet } from "react-router";
import Header from "../components/Header";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="md:w-[60%] w-[80%] m-auto text-white">
            <ParticlesBackground />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}