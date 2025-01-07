import { Outlet } from "react-router";
import Header from "../components/Header";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="w-[60%] m-auto text-white">
            <ParticlesBackground />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}