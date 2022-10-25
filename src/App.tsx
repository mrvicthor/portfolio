import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import { Header, Banner, About, Project, Contact } from "./components";
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
  const [lightTheme, setLightTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };
  return (
    <div className={`App `}>
      <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
        {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
        <Header toggleTheme={toggleTheme} lightTheme={lightTheme} />
        <main className={`${lightTheme ? "bg-[#202c37]" : "bg-[#fafafa]"}`}>
          <Banner lightTheme={lightTheme} />
          <About lightTheme={lightTheme} />
          <Project lightTheme={lightTheme} />
          <Contact lightTheme={lightTheme} />
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
