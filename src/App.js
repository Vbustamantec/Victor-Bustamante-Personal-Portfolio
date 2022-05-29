import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import { useThemeContext } from "./context/ThemeContextProvider";
import "./App.scss";

const App = () => {
  const { darkTheme, setToggle } = useThemeContext();
  return (
    <>
      <div className={darkTheme ? "app app-true" : "app"}>
        <Navbar />
        <main onClick={() => setToggle(false)}>
          <Header />
          <About />
          <Work />
          <Skills />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
