import MapBox from "./MapBox"
import UserDetails from "./UserDetails"

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
        <MapBox/>
        <UserDetails/>
        
    </div>
  )
}
