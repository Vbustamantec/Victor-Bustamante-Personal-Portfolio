import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeContextProvider>
    <Helmet>
      <title>Victor Bustamante | Frontend Developer</title>
      <meta
        name="description"
        content="Victor Bustamante Frontend Developer Portfolio "
      />
      <meta
        property="og:title"
        content="Victor Bustamante | Frontend Developer"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://victorbustamantecera.netlify.app/"
      />
    </Helmet>
    <App />
  </ThemeContextProvider>
);
