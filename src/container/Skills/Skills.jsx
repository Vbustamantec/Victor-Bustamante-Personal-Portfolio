import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { useThemeContext } from "../../context/ThemeContextProvider";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className={!darkTheme ? "head-text" : " head-text head-text-dark"}>
        Skills & Experiences
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className={!darkTheme ? "p-text" : "p-text-dark"}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div
                className={
                  !darkTheme
                    ? "app__skills-exp-year"
                    : "app__skills-exp-year app__skills-exp-year-dark"
                }
              >
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={
                        !darkTheme
                          ? "app__skills-exp-work"
                          : "app__skills-exp-work-dark"
                      }
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4
                        className={!darkTheme ? "bold-text" : "bold-text-dark"}
                      >
                        {work.name}
                      </h4>
                      <p className={!darkTheme ? "p-text" : "p-text-dark"}>
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);