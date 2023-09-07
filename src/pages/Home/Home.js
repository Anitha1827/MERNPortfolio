import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/RxResume_NewUpdate.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();
  // handle Theme
  const handletheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handletheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi 🙋‍♀️ I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Fullstack Developer!",
                  "MERN stack Developer!",
                  "React Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="home-buttons">
            <a
              href="https://api.whatsap.com/send?phone=9353732250"
              rel="noreferrer"
              target="_blank"
              className="btn btn-hire"
            >
              Hire Me
            </a>

            <a
              type=""
              className="btn btn-cv"
              href={Resume}
              download="Anitha.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
