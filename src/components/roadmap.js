import Amplifier from "../images/amplifier.svg";
import ArrowRight from "../images/icons/arrow-right.svg";
import BeginnerIcon from "../images/icons/bookmarkIcon.svg";
import AdvancedIcon from "../images/icons/chatIcon.svg";
import ProfessionalIcon from "../images/icons/ampifierIcon.svg";
import RoadmapLine from "../images/roadmapLine.svg";
import BlurCircle from "../images/ellipseBlur.svg";
import HorizalDots from "../images/horizal-dots.png";
import Background from "../images/level-bg.svg";
import BackgroundResponsive from "../images/level-res-bg.svg";

const RoadmapSection = () => {
  return (
    <div className="container flex flex-col items-center w-full lg:p-10 md:p-6 p-0 ">
      <div className="flex w-full h-full max-w-6xl flex-col">
        <div className="flex flex-row mb-2 px-3 lg:pl-24 md:pl-20 pl-0">
          <div className="md:w-auto w-2/3">
            <div className="lg:pl-24 md:pl-8 pl-2 lg:pr-24 md:pr-8 pr-2 md:pr-2 text-left lg:pt-20 pt-12">
              <h2 className="lg:text-5xl sm:text-4xl text-2xl font-black sm:text-left text-center mb-4">
                Your Marketing" <br />
                "Journey Starts Here
              </h2>
              <p className="text-[#5E5B63] lg:text-xl md:text-base text-xs font-semibold mt-4 text-center lg:pr-24 md:pr-8 pr-2 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
              <div className="flex justify-between rounded-full sm:w-60 w-52 linearGradient text-white mt-8 mr-auto sm:p-2 p-1 items-center">
                <button className="pr-4 w-58 text text-center w-5/6 sm:text-lg">
                  ثبت نام
                </button>

                <span className="p-2  sm:w-10 w-8 sm:h-10 h-8 bg-white rounded-full text-center w-1/6">
                  <img src={ArrowRight} alt="arrow" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/3 roadmap-mainpic md:w-[600px] w-[450px] h-full sm:pl-1">
            <img src={Amplifier} alt="Roadmap" className="w-full h-auto" />
          </div>
        </div>
        <div className="relative px-3 xs:py-8 pb-12 pt-8 xs:pl-24 pl-20">
          <div
            className="absolute top-0 right-0 w-full h-[100%] bg-cover bg-no-repeat md:hidden z-[-1] "
            style={{ backgroundImage: `url(${BackgroundResponsive})` }}
          />

          <div
            className="absolute top-0 right-0 w-full h-[120%] bg-cover bg-no-repeat hidden md:block z-[-1] "
            style={{ backgroundImage: `url(${Background})` }}
          />
          <div className="  sm:py-12 py-4 sm:px-10 px-4 lg:w-2/3 md:w-[60%] w-[95%]">
            <div className="lg:text-4xl sm:text-3xl xs:text-2xl text-xl text-center text-[#fff] font-extrabold sm:pt-[80px] pt-[60px]">
              در چه سطحی میخواهید آموزش ببینید؟
            </div>
            <div className="sm:my-20 my-12">
              <div className="rounded-[20px] sm:py-8 py-6 px-6 bg-[#fff] sm:w-[345px] w-[290px] drop-shadow-md z-[1]">
                <div className="flex justify-between">
                  <div>
                    <p className="text-2xl  font-bold text-[#000]">Beginner</p>
                    <div className="linearGradient w-[150px] h-0.5 my-1"></div>
                    <p className="md:text-xl text-lg font-normal text-[#606060]">
                      مبتدی
                    </p>
                  </div>
                  <div className="h-14 w-14">
                    <img
                      className="w-full"
                      src={BeginnerIcon}
                      alt="Beginner-level"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mb-8">
                    <p className="md:text-lg text-base text-[#000]">
                      میخواهم کارشناس شوم
                    </p>
                    <p className="text-xs text-[#5E5B63] mt-1"></p>
                  </div>

                  <ul className="my-3">
                    <li className="flex items-center mb-3">
                      <div className="w-4 h-4 rounded-full linearGradient ml-2"></div>
                      <p className="text-xs text-[#5E5B63]">
                        لورم ایپسوم متن ساختگی
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full linearGradient ml-2"></div>
                      <p className="text-xs text-[#5E5B63]">
                        لورم ایپسوم متن ساختگی
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <div className="flex justify-between rounded-full linearGradient  text-white mt-4 mr-auto px-2 py-2 items-center">
                    <button className=" px-5 text-sm text-center">بیشتر</button>
                    <span className="py-1 px-1 w-6 h-6 bg-white rounded-full text-center w-1/6">
                      <img src={ArrowRight} alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] sm:py-8 py-6 px-6 bg-[#fff] sm:w-[345px] w-[290px] drop-shadow-md mr-auto ml-[-25%] my-8">
                <div className="flex justify-between">
                  <div>
                    <p className="text-2xl  font-bold text-[#000]">Advanced</p>
                    <div className="linearGradient w-[150px] h-0.5 my-1"></div>
                    <p className="md:text-xl text-lg font-normal text-[#606060]">
                      پیشرفته
                    </p>
                  </div>
                  <div className="h-14 w-14">
                    <img
                      className="w-full"
                      src={AdvancedIcon}
                      alt="Advanced-level"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mb-8">
                    <p className="md:text-lg text-base text-[#000]">
                      میخوام کارشناس ارشد یا استراتژسیت شوم
                    </p>
                    <p className="text-xs text-[#5E5B63] mt-1">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      است.
                    </p>
                  </div>

                  <ul className="my-3">
                    <li className="flex items-center mb-3">
                      <div className="w-4 h-4 rounded-full linearGradient ml-2"></div>
                      <p className="text-xs text-[#5E5B63]">
                        لورم ایپسوم متن ساختگی
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full linearGradient ml-2"></div>
                      <p className="text-xs text-[#5E5B63]">
                        لورم ایپسوم متن ساختگی
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <div className="flex justify-between rounded-full linearGradient  text-white mt-4 mr-auto px-2 py-2 items-center">
                    <button className=" px-5 text-sm text-center">بیشتر</button>
                    <span className="py-1 px-1 w-6 h-6 bg-white rounded-full text-center w-1/6">
                      <img src={ArrowRight} alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] sm:py-8 py-6 px-6 bg-[#fff] sm:w-[345px] w-[290px] drop-shadow-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-2xl  font-bold text-[#000]">
                      Professional
                    </p>
                    <div className="linearGradient w-[150px] h-0.5 my-1"></div>
                    <p className="md:text-xl text-lg font-normal text-[#606060]">
                      حرفه ای
                    </p>
                  </div>
                  <div className="h-14 w-14">
                    <img
                      className="w-full"
                      src={ProfessionalIcon}
                      alt="Professional-level"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mb-8">
                    <p className="md:text-lg text-base text-[#000]">
                      میخواهم مدیر شوم
                    </p>
                    <p className="text-xs text-[#5E5B63] mt-1">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      است.
                    </p>
                  </div>
                  <ul className="my-3">
                    <li className="flex items-center mb-3">
                      <div className="w-4 h-4 rounded-full linearGradient ml-2"></div>
                      <p className="text-xs text-[#5E5B63]">
                        لورم ایپسوم متن ساختگی
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full linearGradient ml-2"></div>
                      <p className="text-xs text-[#5E5B63]">
                        لورم ایپسوم متن ساختگی
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <div className="flex justify-between rounded-full linearGradient  text-white mt-4 mr-auto px-2 py-2 items-center">
                    <button className=" px-5 text-sm text-center">بیشتر</button>
                    <span className="py-1 px-1 w-6 h-6 bg-white rounded-full text-center w-1/6">
                      <img src={ArrowRight} alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="sm:hidden xs:block hidden absolute bottom-[0%] left-[0%]  h-[7000px] z-[-1]"
            alt="RoadmapLine"
            src={RoadmapLine}
          />
          <img
            className="sm:hidden xs:block hidden absolute top-[90%] left-[0%] w-[200px]  h-[200px] z-[1]"
            alt="blur-circle"
            src={BlurCircle}
          />
          <div className="sm:hidden xs:block hidden linearGradient rounded-full absolute bottom-[-15%] left-[5%] w-[80px]  h-[80px] z-[1]"></div>
        </div>
        <div className="flex justify-center xs:h-[380px] sm:h-[160px] h-[100px] sm:my-12 xs:my-10 my-8 md:mt-[180px] ">
          <img src={HorizalDots} alt="divider-dots" />
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
