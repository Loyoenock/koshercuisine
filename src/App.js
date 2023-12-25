import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OurCuisine from "./pages/Home/OurCusines/OurCuisine";
import Shipping from "./pages/Shipping/Shipping";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourcuisine" element={<OurCuisine />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
