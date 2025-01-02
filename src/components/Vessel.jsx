"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink as Link } from "react-router-dom";

const VesselManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: "Fleet Operations",
      description:
        "Optimize day-to-day vessel operations with cutting-edge tools and real-time monitoring, ensuring efficiency and reliability.",
      icon: "fa-anchor",
    },
    {
      title: "Maintenance Planning",
      description:
        "Implement proactive maintenance schedules to reduce downtime and extend the lifecycle of your fleet.",
      icon: "fa-tools",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Stay ahead of international maritime regulations with automated compliance tracking and updates.",
      icon: "fa-clipboard-list",
    },
    {
      title: "Performance Analytics",
      description:
        "Leverage advanced analytics to monitor and improve vessel performance across key metrics.",
      icon: "fa-chart-pie",
    },
    {
      title: "Crew Management",
      description:
        "Efficiently manage crew assignments, certifications, and schedules to ensure smooth operations.",
      icon: "fa-user-cog",
    },
    {
      title: "Fuel Optimization",
      description:
        "Reduce operational costs and carbon footprint with intelligent fuel management systems.",
      icon: "fa-gas-pump",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen pt-20 mt-16 mb-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center p-4">
          <Link
            to="/services"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 decoration-transparent text-black  p-3 rounded-full flex items-center justify-center mr-4"
          >
            <i className="fa-solid fa-arrow-left-long text-xl "></i>
          </Link>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-blue-800 flex-1"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Vessel Management
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
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
            Why Choose HarbourXchange Vessel Management?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Integrated solutions tailored for marine operations</li>
            <li>
              Proactive tools to minimize downtime and maximize efficiency
            </li>
            <li>Real-time analytics for actionable insights</li>
            <li>Comprehensive compliance and regulatory support</li>
            <li>Expert support available 24/7</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            Enhance Your Vessel Management with HarbourXchange
          </h2>
          <Link
            to="/contact"
            className="decoration-transparent inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default VesselManagement;
