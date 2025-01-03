import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// eslint-disable-next-line react/prop-types
function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, 15);
  return null;
}

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitMessage(
      `Hello ${
        formData.firstName[0].toUpperCase() + formData.firstName.slice(1)
      }, thank you for your message. We'll get back to you soon!`
    );
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      message: "",
    });
  };

  const officeLocation = [19.1311, 72.8322];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white pt-5 mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Write to Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Enter Your Company Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Professional Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <motion.button
                  type="reset"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-150 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setFormData({
                      firstName: "",
                      lastName: "",
                      companyName: "",
                      email: "",
                      message: "",
                    })
                  }
                >
                  Reset
                </motion.button>
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500  text-white rounded-md transition-colors duration-150 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
              </div>
            </form>
            {submitMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-600 font-medium"
              >
                {submitMessage}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <i className="fas fa-map-marker-alt text-blue-600 mt-1 text-xl"></i>
                  <p className="text-gray-600">
                    Big Tree Entertainment Private Limited
                    <br />
                    Ground Floor, Wajeda House, Gulmohar Cross Road No. 7,
                    <br />
                    Juhu Scheme, Mumbai, Maharashtra - 400049
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-copy text-blue-600 text-xl"></i>
                  <p className="text-gray-600">CIN - u9993783728EIHF987</p>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-link text-blue-600 text-xl"></i>
                  <a
                    href="https://www.bigtree.in"
                    className=" decoration-transparent transition duration-150 ease-in-out"
                  >
                    https://www.bigtree.in
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Location
              </h2>
              <div className="h-[300px] rounded-lg overflow-hidden border border-gray-300">
                {isClient && (
                  <MapContainer
                    center={officeLocation}
                    zoom={15}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={officeLocation}>
                      <Popup>Big Tree Entertainment Private Limited</Popup>
                    </Marker>
                    <SetViewOnClick coords={officeLocation} />
                  </MapContainer>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
