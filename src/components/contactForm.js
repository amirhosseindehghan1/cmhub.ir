import ArrowRight from "../images/icons/arrow-right.svg";
import Dots from "../images/horizal-dots.png";

const ContactForm = () => {
  return (
    <>
      <div className="container my-20">
        <div className="flex items-center flex-col justify-center mt-[20%] md:mt-0">
          <div className="flex flex-col items-center justify-center bg-[#fff] sm:w-[500px] xs:w-[400px] w-[350px] rounded-[20px] drop-shadow-md  pb-12 ">
            <div className="flex justify-center">
              <div className="sm:w-[450px] w-[90%] sm:mt-[-20%] mt-[-40%] sm:ml-[80%] xs:ml-[205%] ml-[170%] flex items-center">
                <div className="lightLinearGradient sm:w-[220px] w-[140px] sm:h-[200px] h-[100px] rounded-[20px] p-4 drop-shadow-md">
                  <p className="sm:text-xl text-base font-bold text-[#fff]">
                    Contact us
                  </p>
                  <p className="sm:text-lg text-xs font-bold text-[#fff]">
                    فـــرم ارتــــباط با مـــا
                  </p>
                </div>
                <img
                  className="absolute sm:w-[300px] w-[200px] left-[15%] sm:top-[-15%] top-[-13%]"
                  src={Dots}
                  alt="contact-us"
                />
              </div>
            </div>
            <form className="flex flex-col items-center border border-gray-300 rounded-full w-full text-xs pt-8 sm:px-12 px-4">
              <input
                type="text"
                className="bg-[#F5F5F5] rounded-full h-[50px] w-full mb-8 px-5 placeholder-[#C9C9C9] placeholder:text-sm outline-none"
                placeholder="نام خانوادگی"
              />
              <input
                type="text"
                className="bg-[#F5F5F5] rounded-full h-[50px] w-full mb-8 px-5 placeholder-[#C9C9C9] placeholder:text-sm outline-none"
                placeholder="ایمیل"
              />
              <input
                type="text"
                className="bg-[#F5F5F5] rounded-full h-[50px] w-full mb-8 px-5 placeholder-[#C9C9C9] placeholder:text-sm outline-none"
                placeholder="شماره تماس"
              />
            </form>
            <div className="w-full flex items-end">
              <div className="flex justify-between rounded-full linearGradient text-white sm:ml-12 mt-4 ml-4 mr-auto px-2 py-2 items-center">
                <button className="px-5 text-sm text-center">ارسال</button>
                <span className="py-1 px-1 w-6 h-6 bg-white rounded-full text-center w-1/6">
                  <img src={ArrowRight} alt="arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
