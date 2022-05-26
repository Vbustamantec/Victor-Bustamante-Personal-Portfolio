import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { useThemeContext } from "../../context/ThemeContextProvider";

const Header = () => {
  const { darkTheme } = useThemeContext();
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={
        darkTheme
          ? "app__header app__header-true app__flex"
          : "app__header app__flex"
      }
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div
            className={
              !darkTheme
                ? "badge-cmp app__flex"
                : "badge-cmp badge-cmp-dark app__flex"
            }
          >
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p
                className={
                  !darkTheme ? "badge-text" : " badge-text badge-text-dark"
                }
              >
                Hello, I am
              </p>
              <h1
                className={
                  !darkTheme ? "head-text" : "head-text head-text-dark"
                }
              >
                Víctor
              </h1>
            </div>
          </div>
          <div
            className={
              !darkTheme
                ? "tag-cmp app__flex"
                : "tag-cmp tag-cmp-dark app__flex"
            }
          >
            <p
              className={
                !darkTheme ? "badge-text" : "badge-text badge-text-dark"
              }
            >
              Frontend Developer | React | JavaScript | Web3
            </p>
            {/* <p className="p-text">Freelancer</p> */}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.75, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.backgroundHeader} alt="profile_bg" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={
          !darkTheme
            ? "app__header-circles"
            : "app__header-circles app__header-circles-dark"
        }
      >
        {[images.typescript, images.react, images.redux].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
