import ArrowLeft from "../images/icons/arrow-left.svg";
import CourseItem from "../components/items/courseItem";
import PuzzleTwo from "../images/puzzle-two.svg";
import PuzzleOne from "../images/puzzle-one.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
  const settings_one = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  };
  const settings_two = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mb-20">
        <div className="container">
          <div className="flex justify-between mb-10 w-full">
            <p className="text-base font-medium text-[#000]">دوره ها</p>
            <a
              href="#"
              className="text-base font-medium text-[#000] flex items-center"
            >
              دیدن همه
              <img src={ArrowLeft} alt="arrow-left" className="w-4 h-4 mx-2" />
            </a>
          </div>
        </div>
        <div className=" w-full h-[360px] mt-10">
          <div className="container">
            <div className="relative px-4 mt-[-50px]">
              <Slider {...settings_one} className="overflow-hidden cursor-grab">
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
              </Slider>
              <div>
                <img
                  className="absolute bottom-[-160px] right-[150px] w-48 h-48 z-[-1]"
                  src={PuzzleOne}
                  alt="puzzle"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="container">
            <div className="relative">
              <Slider {...settings_two} className="overflow-hidden cursor-grab">
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
              </Slider>
            </div>
          </div>
        </div>

        {/* <div className="relative mt-28">
          <div className="container">
            <div className="flex justify-between mb-10 w-full">
              <p className="text-base font-medium text-[#000]">دوره ها</p>
              <a
                href="#"
                className="text-base font-medium text-[#000] flex items-center"
              >
                دیدن همه
                <img
                  src={ArrowLeft}
                  alt="arrow-left"
                  className="w-4 h-4 mx-2"
                />
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="container">
              <div className="relative">
                <Slider {...settings} className="overflow-hidden cursor-grab">
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                </Slider>
              </div>
            </div>
          </div>
          <img
            className="absolute bottom-[-110px] left-[150px] w-48 h-48 z-[-1]"
            src={PuzzleTwo}
            alt="puzzle"
          />
        </div> */}
      </div>
    </>
  );
};

export default Courses;
