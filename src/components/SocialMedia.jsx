import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useThemeContext } from "../context/ThemeContextProvider";

const SocialMedia = () => {
  const { darkTheme } = useThemeContext();
  return (
    <div
      className={!darkTheme ? "app__social" : "app__social-dark app__social"}
    >
      <a
        href="https://github.com/Vbustamantec"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/victor-bustamante-cera/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
