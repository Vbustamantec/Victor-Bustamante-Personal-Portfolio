import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { motion } from "framer-motion";
import Switch from "react-switch";

import { images } from "../../constants";
import "./Navbar.scss";
import { useThemeContext } from "../../context/ThemeContextProvider";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { setDarkTheme, darkTheme } = useThemeContext();

  return (
    <nav className={darkTheme ? "app__navbar app__navbar-true" : "app__navbar"}>
      <div className="app__navbar-logo">
        {darkTheme ? (
          <a href="#home">
            <img src={images.logoDarkMode} alt="logo" />
          </a>
        ) : (
          <a href="#home">
            <img src={images.logo} alt="logo" />
          </a>
        )}
      </div>
      <ul
        className={
          darkTheme
            ? "app__navbar-links app__navbar-links-true"
            : "app__navbar-links"
        }
      >
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setDarkTheme(!darkTheme)}
        type="button"
        className={
          darkTheme
            ? "app__navbar-switch app__navbar-switch-true"
            : "app__navbar-switch"
        }
      >
        {darkTheme ? "Light 💡" : "Dark 🌙"}
      </button>

      <div
        className={
          darkTheme
            ? "app__navbar-menu app__navbar-menu-true"
            : "app__navbar-menu"
        }
      >
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [280, 0], opacity: [0, 1] }}
            initial={{ x: 280 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 280 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <button
                onClick={() => setDarkTheme(!darkTheme)}
                type="button"
                className="app__navbar-switch-mobile"
              >
                {darkTheme ? "💡" : "🌙"}
              </button>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
    //
  );
};

export default Navbar;
