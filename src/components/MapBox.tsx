import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

export default function MapBox() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API,
  });
  return (
    <div>{isLoaded ? <div className="rounded-md mt-10 ">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "300px" ,borderRadius:"10px"}}
          center={{ lat: -7.583358, lng: 110.831890 }}
          zoom={13}
        >
          <MarkerF position={{ lat: -7.583358, lng: 110.831890 }} />
        </GoogleMap>
      </div> : <p>Loading...</p>}</div>
  );
}
