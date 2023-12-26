import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import OurCuisines from "./pages/OurCuisines/OurCuisines";
import About from "./pages/About/About";
import Shipping from "./pages/Shipping/Shipping";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cuisines" element={<OurCuisines />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
