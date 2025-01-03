/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import MapLayer from "./MapLayer";

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const FeaturesShowcase = () => {
    const features = [
      {
        title: "Real-time Monitoring",
        description:
          "Track your marine operations in real-time with our advanced monitoring system.",
        icon: "fa-chart-line",
      },
      {
        title: "Centralized Platform",
        description:
          "Access all your marine data and controls from a single, user-friendly platform.",
        icon: "fa-desktop",
      },
      {
        title: "Enhanced Connectivity",
        description:
          "Stay connected with your fleet and team members across different locations.",
        icon: "fa-network-wired",
      },
      {
        title: "Operational Efficiency",
        description:
          "Optimize your operations with data-driven insights and automated processes.",
        icon: "fa-cogs",
      },
      {
        title: "Seamless Integration",
        description:
          "Easily integrate with existing systems for a smooth transition and operation.",
        icon: "fa-puzzle-piece",
      },
      {
        title: "24/7 Support",
        description:
          "Get round-the-clock support from our expert team for any queries or issues.",
        icon: "fa-headset",
      },
    ];

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      } else {
        controls.stop();
      }
    }, [isInView, controls]);

    const FeatureItem = ({ feature }) => (
      <motion.div
        className="flex-shrink-0 w-64 p-4 m-2 bg-gradient-to-t from-white to-white rounded-lg shadow-md"
        whileHover={{ scale: 1.05, zIndex: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <i
          className={`fas ${feature.icon} text-3xl mb-3 text-blue-500`}
          aria-hidden="true"
        ></i>
        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </motion.div>
    );

    return (
      <div
        ref={containerRef}
        className="w-full overflow-hidden  bg-gradient-to-b from-white to-slate-100 py-12"
      >
        <motion.div
          className="flex"
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { x: 0 },
            visible: {
              x: [0, -100 * features.length],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              },
            },
          }}
        >
          {[...features, ...features].map((feature, index) => (
            <FeatureItem
              key={`${feature.title}-${index}`}
              feature={feature}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <div className="bg-gray-100 overflow-hidden">
      <section id="home" className="relative ">
        <MapLayer />
      </section>
      <div className="bg-gradient-to-t from-indigo-300 to-white">
        <div id="services" className="pt-5 "></div>
        <div className="container-fluid pt-5 pb-5  min-h-[45vh]  ">
          <div className="container-fluid pt-1 min-h-[45vh]">
            <div className="flex gap-3 px-0 pr-2.5 w-[101%] ">
              <div className="w-1/3 shadow-xl ">
                <div
                  className="relative w-full overflow-hidden "
                  style={{ borderRadius: "10px" }}
                >
                  <div className="absolute top-5 left-5 text-white z-10 ">
                    <h2 className="connect-head font-bold text-4xl ">
                      Vessel Management
                    </h2>
                    <p className="connect-description text-lg">
                      FUEL | RPM | HOUR | CREW | DOCUMENT
                    </p>
                  </div>
                  <NavLink to="/vessel">
                    <img
                      src="/images/big-ship.jpg"
                      alt="Residential"
                      className=" w-full h-[67vh] object-cover transition-transform duration-400 ease-in-out hover:scale-[1.06] cursor-pointer "
                    />
                  </NavLink>
                </div>
              </div>

              <div className="w-1/3 shadow-xl">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="absolute top-5 left-5 text-white z-10">
                    <h2 className="connect-head font-bold text-4xl">
                      Marketplace
                    </h2>
                    <p className="connect-description text-lg">
                      PROJECT | TOWAGE
                    </p>
                  </div>
                  <NavLink to="/market">
                    <img
                      src="/images/new-bg.jpg"
                      alt="Roam"
                      className="w-full h-[67vh] object-cover transition-transform duration-400 ease-in-out hover:scale-[1.06] cursor-pointer"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="w-1/3 mr-3 shadow-xl">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="absolute top-5 left-5 text-white z-10">
                    <h2 className="connect-head font-bold text-4xl">
                      Cargo Movement
                    </h2>
                    <p className="connect-description text-lg">
                      COASTAL | RIVER
                    </p>
                  </div>
                  <NavLink to="/cargo">
                    <img
                      src="/images/new-bg3.jpg"
                      alt="Boats"
                      className="w-full h-[67vh] object-cover transition-transform duration-400 ease-in-out hover:scale-[1.06] cursor-pointer"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Revolutionizing the
                  <span className="block text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                    Indian Marine Marketplace
                  </span>
                </h2>
              </motion.div>
              <motion.p
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl mb-10 leading-relaxed text-blue-100"
              >
                HarbourXchange is disrupting the Indian digital marine
                marketplace by seamlessly connecting the demand and supply ends
                of marine assets. Our innovative platform empowers businesses
                and individuals in the marine industry to thrive in the digital
                age.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <NavLink
                  to="/about"
                  className="inline-flex decoration-transparent items-center px-8 py-3 rounded-full text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </NavLink>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:w-1/2 mb-8 lg:mb-0"
              >
                <img
                  src="/images/new-bg1.jpg"
                  alt="Launch your exchange"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:w-1/2 lg:pl-16"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Launch Your Exchange in Minutes
                </h2>
                <p className="mb-4">Set up HarbourXchange in 2 Simple Steps:</p>
                <ol className="list-decimal list-inside mb-8">
                  <li className="mb-2">CONNECT YOUR DEVICE</li>
                  <li>ACCESS THE NETWORK</li>
                </ol>
                <p className="mb-8">
                  HarbourXchange requires an unobstructed view of the sky.
                  Download the HarbourXchange app to find the ideal installation
                  location.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
                    DOWNLOAD FOR ANDROID
                  </button>
                  <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                    DOWNLOAD FOR IOS
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-t from-gray-100 via-slate-100 to-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Vessel Insight Marketplace
                </h2>
                <p className="text-lg">
                  Digitalizing maritime operations requires not only powerful
                  applications but also a secure data infrastructure providing
                  cost-efficient access to reliable and high-quality data. All
                  applications on the Vessel Insight Marketplace are supported
                  by Kongsberg Vessel Insight data infrastructure.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:w-1/2"
              >
                <img
                  src="/images/new-bg3.jpg"
                  alt="Vessel Insight"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <FeaturesShowcase />
        <footer className="bg-gradient-to-l from-gray-500 to-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">HarbourXchange</h3>
                <p>&copy; 2024 HarbourXchange. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                {["facebook", "twitter", "linkedin", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-blue-400 transition duration-300"
                    >
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </footer>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-5 right-3"
          style={{ zIndex: 9999 }}
        >
          <a
            href={isAtTop ? "#services" : "#home"}
            className={`bg-violet-600 text-white   p-3 ml-auto mx-auto decoration-transparent rounded-2xl shadow-lg hover:bg-violet-700 transition duration-300 flex items-center justify-center`}
          >
            <i
              className={`fas fa-chevron-${isAtTop ? "down" : "up"} text-sm`}
            ></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
