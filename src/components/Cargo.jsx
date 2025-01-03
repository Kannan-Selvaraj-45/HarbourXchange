"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink as Link } from "react-router-dom";

const Cargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cargoServices = [
    {
      title: "Coastal Shipping",
      description: "Efficient cargo transport along the coastline.",
      icon: "fa-water",
    },
    {
      title: "River Transport",
      description: "Specialized cargo movement through inland waterways.",
      icon: "fa-stream",
    },
    {
      title: "Intermodal Solutions",
      description: "Seamless integration with road and rail transport.",
      icon: "fa-truck",
    },
    {
      title: "Real-time Tracking",
      description: "Monitor your cargo's journey from origin to destination.",
      icon: "fa-map-marked-alt",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen pt-20 mt-20 mb-10">
      <div className="container mx-auto px-4">
        <div className=" flex justify-start items-center p-4 ">
          <Link
            to="/services"
            className="bg-gradient-to-r from-white to-red text-black decoration-transparent  p-3 rounded-full flex items-center justify-center mr-4"
          >
            <i className="fa-solid fa-arrow-left-long text-xl"></i>
          </Link>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-blue-800 flex-1 "
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Cargo Movement Solutions
          </motion.h1>
        </div>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Streamlined logistics for coastal and river cargo transport
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cargoServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <i
                className={`fas ${service.icon} text-4xl text-blue-600 mb-4`}
              ></i>
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-blue-600 text-white rounded-lg shadow-xl p-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">
            Benefits of Our Cargo Movement Solutions
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cost-effective alternative to road and rail transport</li>
            <li>Reduced carbon footprint for eco-friendly logistics</li>
            <li>Handling of various cargo types and sizes</li>
            <li>Advanced scheduling and route optimization</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize Your Cargo Movement?
          </h2>
          <Link
            to="/contact"
            className="decoration-transparent inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Cargo;
