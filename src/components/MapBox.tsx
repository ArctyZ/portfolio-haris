import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api"

export default function MapBox() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API
    })
  return (
    <div>MapBox</div>
  )
}
