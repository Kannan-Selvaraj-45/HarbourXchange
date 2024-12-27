import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import XYZ from "ol/source/XYZ";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import { ChevronDown } from 'lucide-react';

// Port coordinates
const ports = [
  { name: "JNPT", coordinates: fromLonLat([72.9492, 18.949]) },
  { name: "Chennai", coordinates: fromLonLat([80.2949, 13.1022]) },
  { name: "Visakhapatnam", coordinates: fromLonLat([83.2875, 17.6868]) },
  { name: "Cochin", coordinates: fromLonLat([76.2673, 9.9658]) },
  { name: "Kandla", coordinates: fromLonLat([70.2167, 23.0333]) },
  { name: "Mundra", coordinates: fromLonLat([69.7047, 22.8387]) },
];

// Vessel places (example coordinates)
const vesselPlaces = [
  { name: "Vessel 1", coordinates: fromLonLat([73.5, 18.5]) },
  { name: "Vessel 2", coordinates: fromLonLat([80.5, 13.5]) },
  { name: "Vessel 3", coordinates: fromLonLat([83.5, 17.5]) },
  { name: "Vessel 4", coordinates: fromLonLat([76.5, 10.0]) },
  { name: "Vessel 5", coordinates: fromLonLat([70.5, 23.5]) },
  { name: "Vessel 6", coordinates: fromLonLat([69.5, 22.5]) },
];

const ScrollIndicator = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!showScrollIndicator) {
    return null;
  }

  return (
    <div 
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'rgba(75, 85, 99, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 3,
      }}
      onClick={handleScrollClick}
    >
      <span style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        Scroll for more
      </span>
      <ChevronDown style={{
        width: '1.5rem',
        height: '1.5rem',
        animation: 'bounce 1s infinite',
      }} />
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25%);
          }
        }
      `}</style>
    </div>
  );
};

const MapLayer = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [showPorts, setShowPorts] = useState(true);
  const [showVessels, setShowVessels] = useState(false);
  const [portLayer, setPortLayer] = useState(null);
  const [vesselLayer, setVesselLayer] = useState(null);

  const portStyle = new Style({
    image: new Icon({
      anchor: [0.6, 0.5],
      src: "/port-icon.png",
      scale: 0.03,
    }),
  });

  const vesselStyle = new Style({
    image: new Icon({
      anchor: [0.6, 0.5],
      src: "/vessel-icon.png",
      scale: 0.05,
    }),
  });

  useEffect(() => {
    if (!mapRef.current) return;

    const portFeatures = ports.map(
      (port) =>
        new Feature({
          geometry: new Point(port.coordinates),
          name: port.name,
        })
    );

    const vesselFeatures = vesselPlaces.map(
      (vessel) =>
        new Feature({
          geometry: new Point(vessel.coordinates),
          name: vessel.name,
        })
    );

    const portVectorSource = new VectorSource({
      features: portFeatures,
    });

    const vesselVectorSource = new VectorSource({
      features: vesselFeatures,
    });

    const portVectorLayer = new VectorLayer({
      source: portVectorSource,
      style: portStyle,
    });

    const vesselVectorLayer = new VectorLayer({
      source: vesselVectorSource,
      style: vesselStyle,
    });

    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            maxZoom: 19,
          }),
        }),
        portVectorLayer,
        vesselVectorLayer,
      ],
      view: new View({
        center: fromLonLat([78.9629, 25.5937]),
        zoom: 4.6,
        minZoom: 2,
        maxZoom: 19,
      }),
    });

    setMap(initialMap);
    setPortLayer(portVectorLayer);
    setVesselLayer(vesselVectorLayer);

    return () => initialMap.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (portLayer) {
      portLayer.setVisible(showPorts);
    }
  }, [showPorts, portLayer]);

  useEffect(() => {
    if (vesselLayer) {
      vesselLayer.setVisible(showVessels);
    }
  }, [showVessels, vesselLayer]);

  const handleShowPortsChange = (event) => {
    setShowPorts(event.target.checked);
  };

  const handleShowVesselsChange = (event) => {
    setShowVessels(event.target.checked);
  };

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      ></div>
      <form
        className="form-inline"
        style={{
          position: "absolute",
          top: 100,
          right: 10,
          zIndex: 2,
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
            marginRight: "20px", // Adjust margin for spacing
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            id="showPorts"
            checked={showPorts}
            onChange={handleShowPortsChange}
          />
          <span style={{ marginLeft: "5px" }}>Ports</span>
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
            id="showVessels"
            checked={showVessels}
            onChange={handleShowVesselsChange}
          />
          <span style={{ marginLeft: "5px" }}>Vessels</span>
        </label>
      </form>
      <ScrollIndicator />
    </div>
  );
};

export default MapLayer;

