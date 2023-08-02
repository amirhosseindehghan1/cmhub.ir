import { useEffect, useState } from "react";
import FeatureItem from "../components/items/featureItem";
import Rings from "../images/circle-bg.svg";
import RingsResponsive from "../images/feature-res.png";
import VerticalDots from "../images/verticalDots.svg";

const Feature = () => {
  const [backgroundImage, setBackgroundImage] = useState(Rings);
  const [backgroundPosition, setBackgroundPosition] = useState("");
  const [backgroundWidth, setBackgroundWidth] = useState("800px");
  const [backgroundHeight, setBackgroundHeight] = useState("800px");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundImage(Rings);
        setBackgroundWidth("800px");
        setBackgroundHeight("800px");
        setBackgroundPosition("left");
      } else if (window.innerWidth >= 600 && window.innerWidth < 1024) {
        setBackgroundImage(RingsResponsive);
        setBackgroundWidth("600px");
        setBackgroundHeight("600px");
        setBackgroundPosition("left");
      } else {
        setBackgroundImage(RingsResponsive);
        setBackgroundWidth("340px");
        setBackgroundHeight("auto");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="container flex flex-col  items-center justify-center w-full xl:mb-40 lg:mb-20 md:mb-60 mb-20 lg:mt-32 sm:mt-20  relative">
        <div
          className=" lg:bg-center bg-left bg-no-repeat bg-contain "
          style={{
            backgroundImage: `url(${backgroundImage})`,
            width: `${backgroundWidth}`,
            height: `${backgroundHeight}`,
            backgroundPositionX: `${backgroundPosition}`,
          }}
        >
          <div className="md:absolute md:mb-0 mb-2 2xl:top-[-35px] lg:top-[-35px] sm:top-[-20px] top-[-30px] 2xl:left-[640px] lg:left-[600px]  md:left-[142px] left-[30px]">
            <FeatureItem number="۱" />
          </div>
          <div className="md:absolute md:mb-0 mb-2 2xl:top-[215px] xl:top-[240px] lg:top-[280px] top-[190px] 2xl:left-[950px] xl:left-[880px] lg:left-[690px] sm:left-[330px] left-[260px]">
            <FeatureItem number="۲" />
          </div>
          <div className="md:absolute md:mb-0 mb-2 2xl:top-[610px] lg:top-[630px] top-[460px] 2xl:left-[840px] xl:left-[710px] lg:left-[580px] left-[330px]">
            <FeatureItem number="۳" />
          </div>
          <div className="md:absolute md:mb-0 mb-2 2xl:top-[340px] xl:top-[320px] lg:top-[340px] top-[660px] 2xl:left-[260px] xl:left-[140px] sm:left-[0px] left-[75px]">
            <FeatureItem number="۴" />
          </div>
        </div>
        {/* <div className="absolute z-[0] w-[300px] top-[60%] right-[8%] rounded-[20px]  overflow-hidden ">
          <img
            src={VerticalDots}
            alt="VerticalDots"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </>
  );
};

export default Feature;
