"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeCity, setActiveCity] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    "Sankari",
    "Coimbatore",
    "Chennai",
    "Salem",
    "Namakkal",
    "Tiruppur",
    "Kochi",
    "Mangalore",
    "Mumbai",
    "Gujarat",
    "Gurgaon",
    "Puducherry",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12">
          The HarbourXChange Journey
        </h1>

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
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto my-auto font-semibold text-xs text-white">
                  {event.year}
                </h1>
              </div>
              <motion.div
                className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4"
                whileHover={{ scale: 1.03 }}
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
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          We Are Spread All Across India
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.img
              src="https://crm.ktt.io:8443/website/vov/hosting/images/svg/map.png"
              alt="India Map"
              className="w-full h-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {cities.map((city, index) => (
              <motion.button
                key={city}
                className={`p-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCity === city
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => setActiveCity(city)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <i className="fas fa-map-marker-alt mr-2"></i>
                {city}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {activeCity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setActiveCity(null)}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
            layoutId={activeCity}
          >
            <h3 className="text-2xl font-bold mb-4">{activeCity}</h3>
            <p className="text-gray-600">
              Our {activeCity} office is a hub of innovation, serving as a key
              point in our network across India. Here, we work tirelessly to
              enhance marine operations and connectivity.
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              onClick={() => setActiveCity(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
