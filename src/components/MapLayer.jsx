import { useEffect, useRef, useState, useCallback } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import XYZ from "ol/source/XYZ";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import { fromLonLat } from "ol/proj";
import {
  Circle as CircleStyle,
  Fill,
  Icon,
  Stroke,
  Style,
  Text,
} from "ol/style";
import { getVectorContext } from "ol/render";
import { Draw, Modify } from "ol/interaction";
import { getArea, getLength } from "ol/sphere";

const attributions =
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

// Port coordinates
const jnpt = fromLonLat([72.9492, 18.949]);
const chennaiPort = fromLonLat([80.2949, 13.1022]);
const visakhapatnamPort = fromLonLat([83.2875, 17.6868]);
const cochinPort = fromLonLat([76.2673, 9.9658]);
const kandlaPort = fromLonLat([70.2167, 23.0333]);
const mundraPort = fromLonLat([69.7047, 22.8387]);

// Nearby station coordinates (example locations)
const jnptStation1 = fromLonLat([72.85, 19.0]);
const jnptStation2 = fromLonLat([73.05, 18.9]);
const chennaiStation1 = fromLonLat([80.2, 13.0]);
const chennaiStation2 = fromLonLat([80.3, 13.2]);
const visakhapatnamStation1 = fromLonLat([83.2, 17.75]);
const visakhapatnamStation2 = fromLonLat([83.35, 17.6]);
const cochinStation1 = fromLonLat([76.35, 9.9]);
const cochinStation2 = fromLonLat([76.2, 10.05]);
const kandlaStation1 = fromLonLat([70.15, 23.1]);
const kandlaStation2 = fromLonLat([70.3, 22.95]);
const mundraStation1 = fromLonLat([69.65, 22.9]);
const mundraStation2 = fromLonLat([69.75, 22.75]);

const createCurvedLine = (start, end, curveDirection = 1, curvature = 0.3) => {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const midPoint = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2];
  const normalVector = [-dy, dx];
  const normalLength = Math.sqrt(normalVector[0] ** 2 + normalVector[1] ** 2);
  const controlPoint = [
    midPoint[0] + (curveDirection * curvature * normalVector[0]) / normalLength,
    midPoint[1] + (curveDirection * curvature * normalVector[1]) / normalLength,
  ];

  const curvedLine = [];
  for (let t = 0; t <= 1; t += 0.1) {
    const x =
      (1 - t) * (1 - t) * start[0] +
      2 * (1 - t) * t * controlPoint[0] +
      t * t * end[0];
    const y =
      (1 - t) * (1 - t) * start[1] +
      2 * (1 - t) * t * controlPoint[1] +
      t * t * end[1];
    curvedLine.push([x, y]);
  }
  return curvedLine;
};

const createRiverRoute = (port, station1, station2) => {
  const route1 = new LineString(createCurvedLine(port, station1));
  const route2 = new LineString(createCurvedLine(port, station2, -1));
  return [
    new Feature({
      type: "riverRoute",
      geometry: route1,
    }),
    new Feature({
      type: "riverRoute",
      geometry: route2,
    }),
  ];
};

const MapLayer = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [speed, setSpeed] = useState(60);
  const [measurementType, setMeasurementType] = useState("LineString");
  const [showSegments, setShowSegments] = useState(false);
  const [clearPrevious, setClearPrevious] = useState(false);

  const riverRoutes = [
    ...createRiverRoute(jnpt, jnptStation1, jnptStation2),
    ...createRiverRoute(chennaiPort, chennaiStation1, chennaiStation2),
    ...createRiverRoute(
      visakhapatnamPort,
      visakhapatnamStation1,
      visakhapatnamStation2
    ),
    ...createRiverRoute(cochinPort, cochinStation1, cochinStation2),
    ...createRiverRoute(kandlaPort, kandlaStation1, kandlaStation2),
    ...createRiverRoute(mundraPort, mundraStation1, mundraStation2),
  ];

  const styles = {
    riverRoute: new Style({
      stroke: new Stroke({
        width: 3,
        color: [0, 127, 255, 0.7],
        lineDash: [1, 5],
      }),
    }),
    geoMarker: new Style({
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({ color: "red" }),
        stroke: new Stroke({
          color: "white",
          width: 2,
        }),
      }),
    }),
    icon: new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: "https://openlayers.org/en/latest/examples/data/icon.png",
        scale: 0.4,
      }),
    }),
    ports: new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({ color: "red" }),
        stroke: new Stroke({
          color: "white",
          width: 2,
        }),
      }),
    }),
  };

  const portFeatures = [
    new Feature({ type: "ports", geometry: new Point(jnpt) }),
    new Feature({ type: "ports", geometry: new Point(mundraPort) }),
    new Feature({ type: "ports", geometry: new Point(kandlaPort) }),
    new Feature({ type: "ports", geometry: new Point(cochinPort) }),
    new Feature({ type: "ports", geometry: new Point(chennaiPort) }),
    new Feature({ type: "ports", geometry: new Point(visakhapatnamPort) }),
  ];

  const stationFeatures = [
    new Feature({ type: "icon", geometry: new Point(jnptStation1) }),
    new Feature({ type: "icon", geometry: new Point(jnptStation2) }),
    new Feature({ type: "icon", geometry: new Point(chennaiStation1) }),
    new Feature({ type: "icon", geometry: new Point(chennaiStation2) }),
    new Feature({ type: "icon", geometry: new Point(visakhapatnamStation1) }),
    new Feature({ type: "icon", geometry: new Point(visakhapatnamStation2) }),
    new Feature({ type: "icon", geometry: new Point(cochinStation1) }),
    new Feature({ type: "icon", geometry: new Point(cochinStation2) }),
    new Feature({ type: "icon", geometry: new Point(kandlaStation1) }),
    new Feature({ type: "icon", geometry: new Point(kandlaStation2) }),
    new Feature({ type: "icon", geometry: new Point(mundraStation1) }),
    new Feature({ type: "icon", geometry: new Point(mundraStation2) }),
  ];

  const vectorSource = new VectorSource({
    features: [...riverRoutes, ...portFeatures, ...stationFeatures],
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: (feature) => {
      return styles[feature.get("type")];
    },
  });

  useEffect(() => {
    if (!mapRef.current) return;

    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attributions: attributions,
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([78.9629, 25.5937]),
        zoom: 4.6,
        minZoom: 2,
        maxZoom: 19,
      }),
    });

    setMap(initialMap);

    return () => initialMap.setTarget(undefined);
  }, []);

  const [geoMarker, setGeoMarker] = useState(null);

  useEffect(() => {
    if (!map) return;

    const position = new Point(
      riverRoutes[0].getGeometry().getFirstCoordinate()
    );
    const newGeoMarker = new Feature({
      type: "geoMarker",
      geometry: position,
    });
    setGeoMarker(newGeoMarker);
    vectorSource.addFeature(newGeoMarker);

    return () => {
      if (newGeoMarker) {
        vectorSource.removeFeature(newGeoMarker);
      }
    };
  }, [map]);

  const moveFeature = useCallback(
    (event) => {
      const vectorContext = getVectorContext(event);
      const frameState = event.frameState;

      if (!geoMarker) return;

      const currentGeometry = geoMarker.getGeometry();
      const currentCoordinate = currentGeometry.getCoordinates();
      console.log(currentCoordinate);
      const elapsedTime = frameState.time - frameState.start;
      const distance = (speed * elapsedTime) / 1e6;

      let currentRouteIndex = 0;
      let accumulatedDistance = 0;

      for (let i = 0; i < riverRoutes.length; i++) {
        const routeGeometry = riverRoutes[i].getGeometry();
        const routeLength = routeGeometry.getLength();

        if (accumulatedDistance + routeLength > distance) {
          currentRouteIndex = i;
          break;
        }

        accumulatedDistance += routeLength;
      }

      const currentRoute = riverRoutes[currentRouteIndex].getGeometry();
      const routeDistance = distance - accumulatedDistance;
      const newCoordinate = currentRoute.getCoordinateAt(
        routeDistance / currentRoute.getLength()
      );

      currentGeometry.setCoordinates(newCoordinate);

      vectorContext.setStyle(styles.geoMarker);
      vectorContext.drawGeometry(currentGeometry);

      map.render();
    },
    [geoMarker, map, speed]
  );

  useEffect(() => {
    if (!map || !geoMarker) return;

    if (animating) {
      vectorLayer.on("postrender", moveFeature);
      map.render();
    } else {
      vectorLayer.un("postrender", moveFeature);
    }

    return () => {
      vectorLayer.un("postrender", moveFeature);
    };
  }, [animating, map, geoMarker, moveFeature]);

  const formatLength = (line) => {
    const length = getLength(line);
    let output;
    if (length > 100) {
      output = Math.round((length / 1000) * 100) / 100 + " km";
    } else {
      output = Math.round(length * 100) / 100 + " m";
    }
    return output;
  };

  const formatArea = (polygon) => {
    const area = getArea(polygon);
    let output;
    if (area > 10000) {
      output = Math.round((area / 1000000) * 100) / 100 + " km\xB2";
    } else {
      output = Math.round(area * 100) / 100 + " m\xB2";
    }
    return output;
  };

  const styleFunction = useCallback((feature, segments, drawType, tip) => {
    const styles = [];
    const geometry = feature.getGeometry();
    if (!geometry) return [];
    const type = geometry.getType();
    let point, label, line;

    styles.push(
      new Style({
        stroke: new Stroke({
          color: "rgba(0, 0, 0, 0.5)",
          lineDash: [10, 10],
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(255, 255, 255, 0.2)",
        }),
      })
    );

    if (!drawType || drawType === type) {
      if (type === "Polygon") {
        point = geometry.getInteriorPoint();
        label = formatArea(geometry);
        line = new LineString(geometry.getCoordinates()[0]);
      } else if (type === "LineString") {
        point = new Point(geometry.getLastCoordinate());
        label = formatLength(geometry);
        line = geometry;
      }
    }

    if (segments && line) {
      line.forEachSegment((a, b) => {
        const segment = new LineString([a, b]);
        const label = formatLength(segment);
        styles.push(
          new Style({
            geometry: new Point(segment.getCoordinateAt(0.5)),
            text: new Text({
              text: label,
              font: "12px Calibri,sans-serif",
              fill: new Fill({
                color: "rgba(255, 255, 255, 1)",
              }),
              backgroundFill: new Fill({
                color: "rgba(0, 0, 0, 0.4)",
              }),
              padding: [2, 2, 2, 2],
              textBaseline: "bottom",
              offsetY: -12,
            }),
          })
        );
      });
    }

    if (label) {
      styles.push(
        new Style({
          geometry: point,
          text: new Text({
            font: "14px Calibri,sans-serif",
            text: label,
            fill: new Fill({
              color: "rgba(255, 255, 255, 1)",
            }),
            backgroundFill: new Fill({
              color: "rgba(0, 0, 0, 0.7)",
            }),
            padding: [3, 3, 3, 3],
            textBaseline: "bottom",
            offsetY: -15,
          }),
        })
      );
    }

    if (tip && type === "Point") {
      styles.push(
        new Style({
          text: new Text({
            text: tip,
            font: "12px Calibri,sans-serif",
            fill: new Fill({
              color: "rgba(255, 255, 255, 1)",
            }),
            backgroundFill: new Fill({
              color: "rgba(0, 0, 0, 0.4)",
            }),
            padding: [2, 2, 2, 2],
            textAlign: "left",
            offsetX: 15,
          }),
        })
      );
    }

    return styles;
  }, []);

  useEffect(() => {
    if (!map) return;

    let draw;
    let modify;

    const addInteraction = () => {
      const drawType = measurementType;
      const activeTip =
        "Click to continue drawing the " +
        (drawType === "Polygon" ? "polygon" : "line");
      const idleTip = "Click to start measuring";
      let tip = idleTip;

      draw = new Draw({
        source: vectorSource,
        type: drawType,
        style: (feature) => styleFunction(feature, showSegments, drawType, tip),
      });

      modify = new Modify({
        source: vectorSource,
        style: (feature) => styleFunction(feature, showSegments, drawType, tip),
      });

      draw.on("drawstart", () => {
        if (clearPrevious) {
          vectorSource.clear();
        }
        modify.setActive(false);
        tip = activeTip;
      });

      draw.on("drawend", () => {
        modify.setActive(true);
        tip = idleTip;
      });

      modify.setActive(true);
      map.addInteraction(draw);
      map.addInteraction(modify);
    };

    addInteraction();

    return () => {
      map.removeInteraction(draw);
      map.removeInteraction(modify);
    };
  }, [map, measurementType, showSegments, clearPrevious, styleFunction]);

  const handleStartAnimation = () => {
    setAnimating(!animating);
  };

  const handleSpeedChange = (event) => {
    setSpeed(Number(event.target.value));
  };

  const handleMeasurementTypeChange = (event) => {
    setMeasurementType(event.target.value);
  };

  const handleShowSegmentsChange = (event) => {
    setShowSegments(event.target.checked);
  };

  const handleClearPreviousChange = (event) => {
    setClearPrevious(event.target.checked);
  };

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: "100vw", height: "95vh", position: "relative" }}
      ></div>
      <div id="controls" style={{ display: "none" }}>
        <label htmlFor="speed">Speed: &nbsp;</label>
        <input
          id="speed"
          type="range"
          min="10"
          max="999"
          step="10"
          value={speed}
          onChange={handleSpeedChange}
        />
        <button onClick={handleStartAnimation}>
          {animating ? "Stop Animation" : "Start Animation"}
        </button>
      </div>
      <form
        className="form-inline"
        style={{
          position: "absolute",
          top: 100,
          right: 10,
          zIndex: 2,
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <label htmlFor="type" style={{ marginRight: "5px" }}>
          Measurement type &nbsp;
        </label>
        <select
          style={{ marginRight: "10px" }}
          id="type"
          value={measurementType}
          onChange={handleMeasurementTypeChange}
        >
          <option value="LineString">Length</option>
          <option value="Polygon">Area</option>
        </select>
        <label
          className="checkbox"
          htmlFor="segments"
          style={{ marginRight: "5px" }}
        >
          <input
            style={{ marginRight: "10px" }}
            type="checkbox"
            id="segments"
            checked={showSegments}
            onChange={handleShowSegmentsChange}
          />
          length
        </label>
        <label
          className="checkbox"
          htmlFor="clear"
          style={{ marginRight: "5px" }}
        >
          <input
            style={{ marginRight: "10px" }}
            type="checkbox"
            id="clear"
            checked={clearPrevious}
            onChange={handleClearPreviousChange}
          />
          Clear previous
        </label>
      </form>
    </div>
  );
};

export default MapLayer;
