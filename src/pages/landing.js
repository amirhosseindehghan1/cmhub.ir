import React, { useState } from "react";
import Header from "../components/header";
import RoadmapSection from "../components/roadmap";
import Blogs from "../components/blogs";
import Courses from "../components/courses";
import Feature from "../components/feature";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import lightShadow from "../images/lightshadow.svg";
import VerticalDots from "../images/verticalDots.svg";
const Landing = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative max-w-7xl header-container">
          <div className=" glassLinearGradient absolute z-[-1] sm:w-[600px] w-[100%] md:h-[750px] h-[500px] top-[0%] left-[0%] rounded-[20px] overflow-hidden"></div>
          <div className="absolute z-[0] sm:w-[300px] w-[150px] top-[25%] sm:left-[1%] left-0 rounded-[20px] overflow-hidden ">
            <img
              src={VerticalDots}
              alt="VerticalDots"
              className="w-full h-auto hidden md:block"
            />
          </div>
          <Header />
          <RoadmapSection />
        </div>
        <Feature />
        <Blogs />

        <Courses />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
