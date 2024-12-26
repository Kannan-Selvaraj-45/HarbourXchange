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
import {
  MouseWheelZoom,
  defaults as defaultInteractions,
} from "ol/interaction";

const ports = [
  { name: "JNPT", coordinates: [72.9492, 18.949] },
  { name: "Chennai", coordinates: [80.2949, 13.1022] },
  { name: "Visakhapatnam", coordinates: [83.2875, 17.6868] },
  { name: "Cochin", coordinates: [76.2673, 9.9658] },
  { name: "Kandla", coordinates: [70.2167, 23.0333] },
  { name: "Mundra", coordinates: [69.7047, 22.8387] },
];
const vessels = [
  { name: "Vessel 1", coordinates: [73.5, 18.5] },
  { name: "Vessel 2", coordinates: [80.5, 13.5] },
  { name: "Vessel 3", coordinates: [83.5, 17.5] },
  { name: "Vessel 4", coordinates: [76.5, 10.0] },
  { name: "Vessel 5", coordinates: [70.5, 23.5] },
  { name: "Vessel 6", coordinates: [69.5, 22.5] },
];

const MapLayer = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [visibility, setVisibility] = useState({ ports: true, vessels: false });

  const createLayer = (data, style, visible) => {
    const features = data.map(
      ({ coordinates, name }) =>
        new Feature({
          geometry: new Point(fromLonLat(coordinates)),
          name,
        })
    );
    return new VectorLayer({
      source: new VectorSource({ features }),
      style,
      visible,
    });
  };

  useEffect(() => {
    if (!mapRef.current) return;

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

    const portLayer = createLayer(ports, portStyle, visibility.ports);
    const vesselLayer = createLayer(vessels, vesselStyle, visibility.vessels);

    const mouseWheelZoomInteraction = new MouseWheelZoom({
      condition: (event) => event.originalEvent.ctrlKey,
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
        portLayer,
        vesselLayer,
      ],
      view: new View({
        center: fromLonLat([78.9629, 25.5937]),
        zoom: 4.6,
        minZoom: 2,
        maxZoom: 19,
      }),
      interactions: defaultInteractions({ mouseWheelZoom: false }).extend([
        mouseWheelZoomInteraction,
      ]),
    });

    setMap(initialMap);
    return () => initialMap.setTarget(null);
  }, []);

  useEffect(() => {
    if (map) {
      map.getLayers().forEach((layer) => {
        if (layer instanceof VectorLayer) {
          const source = layer.getSource();
          const feature = source.getFeatures()[0];
          if (feature) {
            const isPort = ports.some(
              (port) => port.name === feature.get("name")
            );
            layer.setVisible(isPort ? visibility.ports : visibility.vessels);
          }
        }
      });
    }
  }, [map, visibility]);

  const handleLayerToggle = (layerType) =>
    setVisibility((prev) => ({ ...prev, [layerType]: !prev[layerType] }));

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      />
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
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          
        }}
      >
        <label
          className="checkbox"
          htmlFor="showPorts"
          style={{ display: "flex", alignItems: "center"  }}
        >
          <input
            type="checkbox"
            id="showPorts"
            checked={visibility.ports}
            onChange={() => handleLayerToggle("ports")}
            style={{ marginRight: "10px" }} 
          />
            Ports
        </label>
        <label
          className="checkbox"
          htmlFor="showVessels"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="checkbox"
            id="showVessels"
            checked={visibility.vessels}
            onChange={() => handleLayerToggle("vessels")}
            style={{ marginRight: "10px" }}  
          />
           Vessels
        </label>
      </form>
    </div>
  );
};

export default MapLayer;
