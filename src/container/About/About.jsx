import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";
import { useThemeContext } from "../../context/ThemeContextProvider";

const About = () => {
  const [abouts, setAbout] = useState([]);
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);

  return (
    <>
      <h2 className={!darkTheme ? "head-text" : "head-text head-text-dark"}>
        Get to know <span>Me</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2
              className={!darkTheme ? "bold-text" : "bold-text bold-text-dark"}
              style={{ marginTop: 20 }}
            >
              {about.title}
            </h2>
            <p
              className={!darkTheme ? "p-text" : "p-text p-text-dark"}
              style={{ marginTop: 20 }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
