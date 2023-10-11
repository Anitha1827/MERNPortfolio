import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
// import Resume from "";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

import { TfiEmail } from "react-icons/tfi";

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
          <div className="contactlist">
            <div className="home-buttons">
              {/* <a
                href="https://api.whatsapp.com/send?phone=${9353732250}&text=${encodeURIComponent(message)}"
                rel="noreferrer"
                target="blank"
                className="btn btn-hire"
              >
                Hire Me
              </a> */}

              <a
                type=""
                className="btn btn-cv"
                href="https://drive.google.com/file/d/108XwWwTQgnxgv8gKxc6QvodeDH115To5/view?usp=sharing"
                target="blank"
              >
                My Resume
              </a>
            </div>
            <div className="home-buttonsa">
              {/* <a
                href="https://web.whatsapp.com/9353732250"
                target="blank"
                className="phone"
              >
                <BsWhatsapp />
              </a> */}

              <a
                href="https://github.com/Anitha1827"
                target="blank"
                className="github"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anitha-kaladharan-4600351b3/"
                target="blank"
                className="linkedin"
              >
                <BsLinkedin />
              </a>
              <a
                href="anitha.h2711@gmail.com"
                target="blank"
                className="email bg-color-warning"
              >
                <TfiEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
