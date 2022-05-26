import React from "react";
import { useThemeContext } from "../context/ThemeContextProvider";

const NavigationDots = ({ active }) => {
  const { darkTheme } = useThemeContext();

  return (
    <div className="app__navigation">
      {darkTheme
        ? ["home", "about", "work", "skills", "contact"].map((item, index) => (
            <a
              className={" app__navigation-dot-dark"}
              style={active === item ? { backgroundColor: "#EBA140" } : {}}
              key={item + index}
              href={`#${item}`}
            ></a>
          ))
        : ["home", "about", "work", "skills", "contact"].map((item, index) => (
            <a
              className="app__navigation-dot"
              style={active === item ? { backgroundColor: "#313BAC" } : {}}
              key={item + index}
              href={`#${item}`}
            ></a>
          ))}
    </div>
  );
};

export default NavigationDots;
