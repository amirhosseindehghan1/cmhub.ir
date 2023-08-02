import Puzzle from "../images/light-puzzle.svg";
import Logo from "../images/darkLogo.svg";
import Linkedin from "../images/icons/socials/linkedin.svg";
import Twitter from "../images/icons/socials/twitter.svg";
import Instagram from "../images/icons/socials/instagram.svg";
import Telegram from "../images/icons/socials/telegram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0E183E] text-[#fff] text-sm  mt-20 md:pt-0 pt-[10%]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center md:order-2">
            <img
              className="md:w-80 w-64 mt-[-60px] md:static absolute left-[10%]"
              src={Puzzle}
              alt="puzzle"
            />
          </div>
          <div className="py-8 md:order-1">
            <div className="w-[180px] mb-10">
              <img className="w-full" src={Logo} alt="cmHub-logo" />
            </div>
            <div className="grid grid-cols-2 ">
              <div>
                <div className="mb-4">
                  <p className="">خلاصه درباره ما</p>
                </div>
                <div>
                  <p className="mb-3">تماس با ما</p>
                  <p className="mb-2">۰۹۱۲۰۰۰۰۰۰۰۳۴</p>
                  <p className="mb-2">۰۹۱۲۰۰۰۰۰۰۰۳۴</p>
                  <p className="mb-2">info@cmhub.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <ul className="mb-auto">
                  <li className="mb-3">
                    <a href="#">نقشه راه</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">دوره ها</a>
                  </li>
                </ul>
                <ul className="flex items-center">
                  <li className="w-8 h-8 rounded-full linearGradient text-[#fff] flex items-center justify-center p-2 mx-1">
                    <a href="#">
                      <img src={Linkedin} alt="linkedin" />
                    </a>
                  </li>
                  <li className="w-8 h-8 rounded-full linearGradient text-[#fff] flex items-center justify-center p-2 mx-1">
                    <a href="#">
                      <img src={Twitter} alt="Twitter" />
                    </a>
                  </li>
                  <li className="w-8 h-8 rounded-full linearGradient text-[#fff] flex items-center justify-center p-2 mx-1">
                    <a href="#">
                      <img src={Instagram} alt="Instagram" />
                    </a>
                  </li>
                  <li className="w-8 h-8 rounded-full linearGradient text-[#fff] flex items-center justify-center p-2 mx-1">
                    <a href="#">
                      <img src={Telegram} alt="Telegram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
