import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Vessel from "./components/Vessel";
import Market from "./components/Market";
import Cargo from "./components/Cargo";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vessel" element={<Vessel />} />
        <Route path="/market" element={<Market />} />
        <Route path="/cargo" element={<Cargo />} />
      </Routes>
    </Router>
  );
};

export default App;
