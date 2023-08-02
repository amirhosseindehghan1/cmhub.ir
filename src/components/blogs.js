import ArrowLeft from "../images/icons/arrow-left.svg";

import BlogItem from "./items/blogItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full lg:my-12 my-20">
        <div className="container">
          <div className="flex justify-between mb-20 w-full">
            <p className="text-base font-medium text-[#000]">
              آخرین مطالب بلاگ
            </p>
            <a
              href="#"
              className="text-base font-medium text-[#000] flex items-center"
            >
              دیدن همه
              <img src={ArrowLeft} alt="arrow-left" className="w-4 h-4 mx-2" />
            </a>
          </div>
        </div>
        <div className="bg-[#0E183E] w-full h-[360px]">
          <div className="container">
            <div className="relative px-4 mt-[-50px]">
              <Slider {...settings} className="overflow-hidden cursor-grab">
                <BlogItem />
                <BlogItem />
                <BlogItem />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
