import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
const Maps = ({ hotelsData }) => {
  const [selectedLocation, setselectedLocation] = useState({});
  const cordinates = hotelsData.map((result) => ({
    longitude: result.coordinate.lat,
    latitude: result.coordinate.lon,
  }));
  const center = getCenter(cordinates);
  // const [initialViewState, setinitialViewState]= useState({
  // latitude:center.latitude,
  // longitude: center.longitude,
  // })
  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
        style={{
          height: "530px",
        }}
        initialViewState={{
          latitude: "40.730610",
          longitude: "-73.935242",
          zoom: 11,
        }}
        mapStyle="mapbox://styles/ifake371/cl7uf4ozm006u15lg5957ukkk"
      >
        {hotelsData.map((result) => (
          <div key={result.id}>
            <Marker
              latitude={result.coordinate.lat}
              longitude={result.coordinate.lon}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role="img"
                onClick={() => {
                  setselectedLocation(result.coordinate);
                }}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {selectedLocation.lat === result.coordinate.lat ? (
              <Popup
                onClose={() => setselectedLocation({})}
                closeOnClick={false}
                latitude={result.coordinate.lat}
                longitude={result.coordinate.lon}
              >
                {result.name}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default Maps;
