import React, { useEffect, useState } from "react";
import logo from "../assets/logo_kim_wotawati_ai.webp";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isHome, setIsHome] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState("");
  const [menuIcon, setMenuIcon] = useState(<IoMenu className="text-2xl" />);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(
      menuOpen ? (
        <IoMenu className="text-2xl" />
      ) : (
        <IoClose className="text-2xl" />
      )
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setNavbarVisible(scrollPosition < threshold);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let Links = [
    { name: "Home", link: "/" },
    { name: "About Wotawati", link: "/about" },
  ];

  const navigate = useNavigate();

  return (
    <>
      {/* Ini navbarnya */}
      <div
        className={`bg-transparent fixed top-0 left-0 w-full z-10 ${
          navbarVisible
            ? "opacity-100 translate-y-0 "
            : "opacity-0 translate-y-5"
        } duration-500 ease-in-out`}
      >
        <div className="py-4 px-7 flex justify-between flex-col md:flex-row">
          <div className="flex justify-between items-center md:mb-0">
            {/* logo mcs */}
            <div className="flex text-2xl cursor-pointer ms-[1rem] transition ease-in-out delay-150 hover:scale-110 duration-300">
              <img
                src={logo}
                alt="Logo"
                className="h-7 w-7 md:h-14 md:w-14"
                onClick={() => navigate("/")}
              />
            </div>

            {/* ini buttonnya */}
            <div className="md:hidden pt-2">
              <button
                onClick={toggleMenu}
                {...(isHome
                  ? { className: "text-white" }
                  : { className: "text-black" })}
              >
                {menuIcon}
              </button>
            </div>
          </div>

          {/* ini menu2nya */}
          <ul
            className={`md:flex bg-slate-800 ${
              menuOpen ? "block" : "hidden"
            } md:items-center w-full md:w-auto text-center ${menuAnimation}`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className={`relative font-semibold my-6 md:my-0 md:mx-4 text-black font-inter`}
              >
                <a
                  href={link.link}
                  className={`relative hover:text-dark-500 transition duration-500 ease-in-out group font-bold ${
                    location.pathname === "/" ? "text-white" : "text-black"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 transform origin-bottom scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-95 ${
                      location.pathname === "/" ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
