import React from "react";
import Background from "./Background";
import Brands from "./Brands";
import FeauturedCategories from "./FeauturedCategories";
import FeauturedProducts from "./FeauturedProducts";
import Footer from "./Footer";
import LatestProducts from "./LatestProducts";
import Navbar from "./Navbar";
import Offer from "./Offer";
import Testimonial from "./Testimonial";

function Home(params) {
  return (
    <>
      <Navbar />
      <Background/>
     <FeauturedCategories/>
     <FeauturedProducts/>
     <LatestProducts/>
     <Offer/> 
     <Testimonial/>
     <Brands/>
     <Footer/>
    </>
  );
}

export default Home;
