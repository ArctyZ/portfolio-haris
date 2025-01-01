import { Outlet } from "react-router";
import Header from "../components/Header";
import ParticlesBackground from "../components/ParticlesBackground";

export default function MainLayout() {
    return (
        <div className="w-[60%] m-auto">
            <ParticlesBackground />
            <Header />
            <Outlet />
        </div>
    );
}