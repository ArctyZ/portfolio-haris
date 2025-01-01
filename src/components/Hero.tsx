import MapBox from "./MapBox"
import UserDetails from "./UserDetails"
import TechStack from "./TechStack"
import ProjectsBox from "./ProjectsBox"
export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
        <MapBox/>
        <UserDetails/>
        <TechStack/>
        <ProjectsBox/>
    </div>
  )
}
