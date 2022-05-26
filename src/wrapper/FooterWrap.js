import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { useThemeContext } from "../context/ThemeContextProvider";

const FooterWrap = (Component, idName, classNames) =>
  function HigherOrderComponent() {
    const { darkTheme } = useThemeContext();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div
            className={!darkTheme ? "copyright" : "copyright copyright-dark"}
          >
            <p className="p-text">@2022 Victor Bustamante</p>
            <p className="p-text">All Rights Reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default FooterWrap;
