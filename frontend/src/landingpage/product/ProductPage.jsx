import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/BearClaw.png"
        productName="BearClaw"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftSection
        imageURL="media/images/chip.png"
        productName="Chip"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      /><LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      
      <RightSection />
      <Universe />
    </>
  );
}

export default ProductPage;
