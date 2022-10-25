import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import {
  Header,
  Banner,
  About,
  Project,
  Contact,
  Footer,
  Socials,
  Email,
} from "./components";
import "./App.css";

interface ContextProps {
  lightTheme: boolean;
  setLightTheme: (lightTheme: boolean) => void;
}

export const ThemeContext = createContext<ContextProps>({
  lightTheme: true,
  setLightTheme: () => {},
});

function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };
  return (
    <div className={`App `}>
      <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
        <Header toggleTheme={toggleTheme} lightTheme={lightTheme} />
        <main
          className={`${
            lightTheme
              ? "bg-[#202c37] text-[white]"
              : "bg-[#fafafa] text-[#111517]"
          } px-4 `}
        >
          <div className="md:grid md:max-w-5xl md:mx-auto md:grid-cols-8">
            <div className="">
              <Socials />
            </div>
            <div className="col-span-6">
              <Banner lightTheme={lightTheme} />
              <About lightTheme={lightTheme} />
              <Project lightTheme={lightTheme} />
              <Contact lightTheme={lightTheme} />
              <Footer lightTheme={lightTheme} />
            </div>
            <div>
              <Email lightTheme={lightTheme} />
            </div>
          </div>
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
