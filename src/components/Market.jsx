"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink as Link } from "react-router-dom";

const Market = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const marketplaceFeatures = [
    {
      title: "Vessel Listings",
      description: "Browse and list vessels for charter or sale.",
      icon: "fa-ship",
    },
    {
      title: "Cargo Opportunities",
      description: "Connect with shippers and find cargo for your vessels.",
      icon: "fa-box",
    },
    {
      title: "Equipment Exchange",
      description: "Buy, sell, or rent marine equipment efficiently.",
      icon: "fa-tools",
    },
    {
      title: "Service Providers",
      description: "Find or offer specialized marine services.",
      icon: "fa-handshake",
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
            Market Place
          </motion.h1>
        </div>

        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Your one-stop platform for all marine industry needs
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {marketplaceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <i
                className={`fas ${feature.icon} text-4xl text-blue-600 mb-4`}
              ></i>
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-blue-600 text-white rounded-lg shadow-xl p-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Why Use Our Marketplace?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access to a wide network of marine industry professionals</li>
            <li>Secure and transparent transactions</li>
            <li>Real-time market insights and analytics</li>
            <li>Streamlined communication between buyers and sellers</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Dive Into the Marine Marketplace?
          </h2>
          <Link
            to="/contact"
            className="decoration-transparent inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Join Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Market;
