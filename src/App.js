import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import { useThemeContext } from "./context/ThemeContextProvider";
import "./App.scss";
import { useState } from "react";

const App = () => {
  const { darkTheme } = useThemeContext();
  return (
    <div className={darkTheme ? "app app-true" : "app"}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/*  <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
