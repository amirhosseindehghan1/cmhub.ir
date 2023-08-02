import React, { useState } from "react";
// import { MenuIcon } from "@heroicons/react/solid";
import logo from "../images/logo.svg";
import profile from "../images/icons/profile.svg";
import search from "../images/icons/search.svg";
import Menu from "../images/icons/hamburgermenu.svg";
import Close from "../images/icons/cross.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const menuItems = [
    "نقشه راه",
    "دوره ها",
    "محصولات",
    "درباره ما",
    "تماس با ما",
  ];

  const MenuModal = ({ onClose, menuItems, handleMenuItemClick }) => {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 w-full m-4 h-[95%]">
          <div className="flex justify-end mb-8">
            <button onClick={onClose} className="focus:outline-none">
              <img src={Close} alt="close-modal" />
            </button>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="جستجو..."
              className="border border-gray-300 border-solid rounded-full py-1 pl-8 pr-3 w-full bg-transparent placeholder:text-sm"
            />
            <button className="absolute inset-y-0 left-0 pl-2 flex items-center w-7">
              <img src={search} alt="search" className="w-full" />
            </button>
          </div>

          <div className="my-4 space-y-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-[#0E183E] hover:text-purple-600 font-medium table px-3 py-2 ${
                  index === selectedItem
                    ? "border-b-2 border-purple-600 border-solid"
                    : "border-b-2 border-transparent border-solid hover:border-purple-600"
                }`}
                onClick={() => handleMenuItemClick(index)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-end">
            <button className="linearGradient text-white rounded-full w-8 h-8 flex items-center justify-center mx-2 p-2">
              <img src={profile} alt="profile" className="" />
            </button>
            <div className="flex items-center">
              <button className="text-[#000] hover:text-purple-600 font-medium px-1">
                نام کاربری
              </button>
              <div className="h-[24px] w-[3px] linearGradient mx-2"></div>
              <button className="text-[#000] hover:text-purple-600 font-medium px-1">
                خروج
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (index) => {
    setSelectedItem(index);
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-0 w-full">
      <div className=" mx-auto px-8 py-3">
        <div className="flex justify-between items-center h-16">
          <div className="logo sm:w-40 w-32 h-12 lg:mx-8 ml-6">
            <img className="w-full" src={logo} alt="logo" />
          </div>

          <div className="hidden lg:flex lg:space-x-4 lg:px-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-[#0E183E] text-sm font-semibold px-3 py-2 ${
                  index === selectedItem
                    ? "border-b-2 border-purple-600 border-solid"
                    : "border-b-2 border-transparent border-solid hover:border-purple-600"
                }`}
                onClick={() => handleMenuItemClick(index)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:items-center">
            <button className="linearGradient text-white rounded-full w-8 h-8 flex items-center justify-center mx-2 p-2">
              <img src={profile} alt="profile" className="" />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو..."
                className="border border-gray-300 border-solid rounded-full py-1 pl-8 pr-3 w-48 bg-transparent placeholder:text-sm"
              />
              <button className="absolute inset-y-0 left-0 pl-2 flex items-center w-7 ">
                <img src={search} alt="search" className="w-full" />
              </button>
            </div>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="sm:w-8 w-6 sm:h-8 h-6 focus:outline-none"
            >
              <img src={Menu} alt="menu" className="w-full" />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <MenuModal
            onClose={() => setIsMenuOpen(false)}
            menuItems={menuItems}
            handleMenuItemClick={handleMenuItemClick}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
