import React from "react";
import "./About.css";
import LightSpeed from "react-reveal/LightSpeed";

import Profile from "../../assets/images/D87A3382.JPG";

const About = () => {
  return (
    <>
      <LightSpeed left>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Profile} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                "Passionate Web Developer with a year of hands-on experience in
                crafting elegant and responsive web interfaces using HTML, CSS,
                and Bootstrap. Backed by a solid foundation in JavaScript, I've
                spent a year refining my skills in creating dynamic and
                interactive web experiences. I recently completed an intensive
                MERN stack course at GUVI IIT, where I gained comprehensive
                knowledge of MongoDB, Express.js, React, and Node.js. With a
                strong eye for design and a drive to create seamless user
                experiences, I am dedicated to leveraging my skills to
                contribute to impactful web projects."
              </p>
            </div>
          </div>
        </div>
      </LightSpeed>
    </>
  );
};

export default About;
