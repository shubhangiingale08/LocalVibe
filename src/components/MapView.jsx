
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);

  return null;
}
function MapView() {

  const [userLocation, setUserLocation] = useState(null);

  const findMe = () => {
    alert("Button clicked");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

        setUserLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
        alert(
  `Latitude: ${position.coords.latitude}
Longitude: ${position.coords.longitude}`
);
      },
      () => {
        alert("Location access denied!");
      }
    );
  };


  const events = [
    {
      title: "🎵 Music Concert",
      position: [18.5204, 73.8567],
    },
    {
      title: "🍔 Food Festival",
      position: [19.0760, 72.8777],
    },
    {
      title: "💻 Tech Workshop",
      position: [17.3850, 78.4867],
    },
    {
      title: "🎭 Cultural Festival",
      position: [17.6599, 75.9064],
    },
  ];


  return (
    <section className="map-section">

      <h2>Event Locations</h2>

      
      <button onClick={findMe}>
  📍 Find Near Me
</button>

<p>{userLocation ? "Location Found ✅" : "Location Not Found ❌"}</p>


      <MapContainer
        center={userLocation || [19.0760, 73.0]}
        zoom={5}
        style={{ height: "500px", width: "100%" }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && <ChangeMapView center={userLocation} />}


        {events.map((event, index) => (
          <Marker key={index} position={event.position}>
            <Popup>
              {event.title}
            </Popup>
          </Marker>
        ))}
        {console.log(userLocation)}


        {userLocation && (
          <Marker position={userLocation}>
            <Popup>
              📍 You are here
            </Popup>
          </Marker>
        )}

      </MapContainer>

    </section>
  );
}

export default MapView;