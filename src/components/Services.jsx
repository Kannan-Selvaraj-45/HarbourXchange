/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen   bg-gradient-to-b from-blue-100 to-white pt-5">
      <motion.h1
        className="text-center mt-4 tracking-wide text-4xl pt-20 pb-3 text-blue-800 font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SERVICES
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Explore our comprehensive range of maritime solutions designed to
        optimize your operations and drive your business forward.
      </motion.p>

      <div className="container-fluid pb-4 min-h-[45vh]">
        <div className="container-fluid pt-1 min-h-[45vh]">
          <div className="flex gap-3 px-0 pr-2.5 w-[101%]">
            <ServiceCard
              title="Vessel Management"
              description="FUEL | RPM | HOUR | CREW | DOCUMENT"
              image="/images/big-ship.jpg"
              link="/vessel"
            />
            <ServiceCard
              title="Marketplace"
              description="PROJECT | TOWAGE"
              image="/images/new-bg.jpg"
              link="/market"
            />
            <ServiceCard
              title="Cargo Movement"
              description="COASTAL | RIVER"
              image="/images/new-bg3.jpg"
              link="/cargo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, image, link }) => (
  <motion.div
    className="w-1/3 shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div
      className="relative w-full overflow-hidden"
      style={{ borderRadius: "10px" }}
    >
      <div className="absolute top-5 left-5 text-white z-10 ">
        <h2 className="connect-head font-bold text-4xl ">{title}</h2>
        <p className="connect-description text-lg">{description}</p>
      </div>
      <NavLink to={link}>
        <img
          src={image}
          alt={title}
          className="w-full h-[64vh] object-cover transition-transform duration-400 ease-in-out hover:scale-[1.06] cursor-pointer"
        />
      </NavLink>
    </div>
  </motion.div>
);

export default Services;
