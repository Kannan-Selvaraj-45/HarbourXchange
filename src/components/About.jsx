import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// eslint-disable-next-line react/prop-types
function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, 10);
  return null;
}

const About = () => {
  const [activeCity, setActiveCity] = useState(null);
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Center of India
  const [mapZoom, setMapZoom] = useState(4);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    window.scrollTo(0, 0);
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

  const cities = [
    { name: "Sankari", coords: [11.4888, 77.8974] },
    { name: "Coimbatore", coords: [11.0168, 76.9558] },
    { name: "Chennai", coords: [13.0827, 80.2707] },
    { name: "Salem", coords: [11.6643, 78.146] },
    { name: "Namakkal", coords: [11.2342, 78.1673] },
    { name: "Tiruppur", coords: [11.1085, 77.3411] },
    { name: "Kochi", coords: [9.9312, 76.2673] },
    { name: "Mangalore", coords: [12.9141, 74.856] },
    { name: "Mumbai", coords: [19.076, 72.8777] },
    { name: "Ahmedabad", coords: [23.0225, 72.5714] },
    { name: "Gurgaon", coords: [28.4595, 77.0266] },
    { name: "Puducherry", coords: [11.9416, 79.8083] },
  ];

  const historyTimeline = [
    {
      year: "2015",
      title: "Riverine Group Established",
      description:
        "Mr. Shrey Tayal founds the Riverine Group, a leading marine company operating on National Waterway and Coastal Shipping.",
    },
    {
      year: "2018",
      title: "Identifying Industry Gaps",
      description:
        "With expertise in various marine services, Mr. Tayal recognizes critical gaps in the marine sector.",
    },
    {
      year: "2020",
      title: "HarbourXChange Conception",
      description:
        "The vision for HarbourXChange as a centralized platform for real-time monitoring and connectivity in the marine sector is born.",
    },
    {
      year: "2021",
      title: "Partnership with KT Telematic Solutions",
      description:
        "HarbourXChange partners with KT Telematic Solutions to enhance operational efficiency and transparency in the marine sector.",
    },
    {
      year: "2022",
      title: "Launch of HarbourXChange",
      description:
        "HarbourXChange is officially launched as a SaaS platform, designed for easy plug-and-play operation and integration.",
    },
  ];

  const handleCityClick = (city) => {
    setActiveCity(city);
    setMapCenter(city.coords);
    setMapZoom(10);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white mt-5 pt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          The HarbourXChange Journey
        </motion.h1>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>

          {historyTimeline.map((event, index) => (
            <motion.div
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="order-1 w-5/12"></div>
              <motion.div 
                className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="mx-auto my-auto font-semibold text-xs text-white">
                  {event.year}
                </h2>
              </motion.div>
              <motion.div
                className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4"
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 8px rgb(0,0,0,0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  {event.title}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                  {event.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-xl"
      >
        <motion.h2 
          className="text-3xl font-bold text-center text-blue-800 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
        >
          We Are Spread All Across India
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <motion.div 
            className="w-full lg:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
          >
            {isClient && (
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {cities.map((city) => (
                  <Marker key={city.name} position={city.coords}>
                    <Popup>{city.name}</Popup>
                  </Marker>
                ))}
                {activeCity && <SetViewOnClick coords={activeCity.coords} />}
              </MapContainer>
            )}
          </motion.div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cities.map((city, index) => (
              <motion.button
                key={city.name}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCity === city
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-500 hover:text-white"
                }`}
                onClick={() => handleCityClick(city)}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <i
                  className="fas fa-map-marker-alt mr-2"
                  aria-hidden="true"
                ></i>
                <span>{city.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {activeCity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]"
            onClick={() => setActiveCity(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold mb-4">{activeCity.name}</h3>
              <p className="text-gray-600">
                Our {activeCity.name} office is a hub of innovation, serving as
                a key point in our network across India. Here, we work
                tirelessly to enhance marine operations and connectivity.
              </p>
              <motion.button
                className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                onClick={() => setActiveCity(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;

