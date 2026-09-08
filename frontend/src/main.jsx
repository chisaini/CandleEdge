import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import Support from "./landingpage/support/SupportPage";
import Pricing from "./landingpage/pricing/PricingPage";
import Product from "./landingpage/product/ProductPage";
import About from "./landingpage/about/AboutPage";
import Signup from "./landingpage/signup/Signup";
import HomePage from "./landingpage/home/HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NotFound from "./landingpage/NotFound";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
