import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import { useThemeContext } from "./context/ThemeContextProvider";
import "./App.scss";

const App = () => {
  const { darkTheme } = useThemeContext();
  return (
    <>
      <div className={darkTheme ? "app app-true" : "app"}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default App;
