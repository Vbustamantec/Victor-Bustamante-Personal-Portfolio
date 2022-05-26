import { motion } from "framer-motion";
import { images } from "../../constants";
import { FooterWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { useState } from "react";
import "./Footer.scss";
import { useThemeContext } from "../../context/ThemeContextProvider";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const { darkTheme } = useThemeContext();

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    //Deestructuro formData paso los valores ya obtenidos y ajusto el valor que estoy cambiando en el campo actual
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmited(true);
    });
  };

  return (
    <>
      <h2 className={!darkTheme ? "head-text" : "head-text head-text-dark"}>
        Chat with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:victorbust.c@gmail.com" className="p-text">
            victorbust.c@gmail.com
          </a>
        </div>

        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+1 (123) 456-789" className="p-text">
            +1 (123) 456-789
          </a>
        </div> */}
      </div>

      {!isFormSubmited ? (
        <div
          className={
            !darkTheme
              ? "app__footer-form app__flex"
              : "app__footer-form app__footer-form-dark app__flex"
          }
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          {!loading ? (
            <button type="button" className="p-text" onClick={handleSubmit}>
              Send Message
            </button>
          ) : (
            <div
              class={
                !darkTheme
                  ? "lds-dual-ring"
                  : "lds-dual-ring lds-dual-ring-dark"
              }
            ></div>
          )}
        </div>
      ) : (
        <div>
          <h3 className={!darkTheme ? "head-text" : "head-text head-text-dark"}>
            Thank you for getting in touch
          </h3>
        </div>
      )}
    </>
  );
};

export default FooterWrap(MotionWrap(Footer, "app__footer"), "contact");
