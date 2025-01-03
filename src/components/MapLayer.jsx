import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ports = [
  { name: "JNPT", coordinates: [18.949, 72.9492] },
  { name: "Chennai", coordinates: [13.1022, 80.2949] },
  { name: "Visakhapatnam", coordinates: [17.6868, 83.2875] },
  { name: "Cochin", coordinates: [9.9658, 76.2673] },
  { name: "Kandla", coordinates: [23.0333, 70.2167] },
  { name: "Mundra", coordinates: [22.8387, 69.7047] },
];

const vesselPlaces = [
  { name: "Vessel 1", coordinates: [18.5, 73.5] },
  { name: "Vessel 2", coordinates: [13.5, 80.5] },
  { name: "Vessel 3", coordinates: [17.5, 83.5] },
  { name: "Vessel 4", coordinates: [10.0, 76.5] },
  { name: "Vessel 5", coordinates: [23.5, 70.5] },
  { name: "Vessel 6", coordinates: [22.5, 69.5] },
];

const MapLayer = () => {
  const [showPorts, setShowPorts] = useState(true);
  const [showVessels, setShowVessels] = useState(false);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;

    map.setView([25.5937, 78.9629], 4.6);
  }, [map]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
        });
      });
    }
  }, []);

  const vesselIcon = new L.Icon({
    iconUrl: "/boat.svg",
    iconSize: [25, 25],
    iconAnchor: [20, 15],
    popupAnchor: [0, -15],
  });

  const handleShowPortsChange = (event) => {
    setShowPorts(event.target.checked);
  };

  const handleShowVesselsChange = (event) => {
    setShowVessels(event.target.checked);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <MapContainer
        center={[25.5937, 78.9629]}
        zoom={4.4}
        style={{ width: "100%", height: "100%" }}
        minZoom={2}
        maxZoom={19}
        whenCreated={setMap}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        /> */}
        {/* <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        />   */}
        {/* <TileLayer
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.cyclosm.org/">CyclOSM</a> contributors'
        /> */}
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.openstreetmap.fr">OSM France</a>'
        /> */}

        {/* <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; Esri, &copy; <a href="https://www.esri.com/">ESRI</a>'
        /> */}
        {/* <TileLayer
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://wikimediafoundation.org">Wikimedia</a>'
        /> */}
        

        {showPorts &&
          ports.map((port) => (
            <Marker key={port.name} position={port.coordinates}>
              <Popup>{port.name}</Popup>
            </Marker>
          ))}
        {showVessels &&
          vesselPlaces.map((vessel) => (
            <Marker
              key={vessel.name}
              position={vessel.coordinates}
              icon={vesselIcon}
            >
              <Popup>{vessel.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
      <form
        className="form-inline"
        style={{
          position: "absolute",
          top: 100,
          right: 25,
          zIndex: 1000,
          backgroundColor: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label
          className="checkbox"
          htmlFor="showPorts"
          style={{
            marginRight: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            className="accent-violet-600"
            id="showPorts"
            checked={showPorts}
            onChange={handleShowPortsChange}
          />
          <span style={{ marginLeft: "5px" }}>ShipYards</span>
        </label>
        <label
          className="checkbox"
          htmlFor="showVessels"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            className="accent-black"
            id="showVessels"
            checked={showVessels}
            onChange={handleShowVesselsChange}
          />
          <span style={{ marginLeft: "5px" }}>Vessels</span>
        </label>
      </form>
    </div>
  );
};

export default MapLayer;
