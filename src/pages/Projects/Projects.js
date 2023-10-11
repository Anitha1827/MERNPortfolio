import React from "react";
import "./Projects.css";
import Webscrap from "../../assets/images/projectWEB.cf8f84287eba5858a06b.png";
import social from "../../assets/images/bookcollection.png";
import quiz from "../../assets/images/quiz.png";

const Projects = () => {
  return (
    <>
      <div className="conatiner project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />

        <p className="pb-3 text-center">Most recent works</p>

        {/* Card Design */}

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://blog.zegocloud.com/wp-content/uploads/2023/06/build-zoom-clone.jpg"
                  alt="project 1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <a
                  href="https://github.com/Anitha1827/ZoomClone_WebRTC_frontend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI source code
                </a>
                <a
                  href="https://github.com/Anitha1827/ZoomClone_WebRTC_backend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Source code
                </a>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Video Chating Application</h5>
                </div>
                <a
                  href="https://jade-tarsier-288326.netlify.app/"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="project 2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <a
                  href="https://github.com/Anitha1827/E-commerce-frontend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI source code
                </a>
                <a
                  href="https://github.com/Anitha1827/E-commerce-App-backend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Source code
                </a>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">E-commerce App</h5>
                  <h6>
                    Credentials admin : admin@admin.com pw: 123 <br />
                    user: user@user.com pw: 123
                  </h6>
                </div>
                <a
                  href="https://superb-clafoutis-168df1.netlify.app/"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={social} alt="project 3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <a
                  href="https://github.com/Anitha1827/bookCollectionFrontend.git"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI source code
                </a>
                <a
                  href="https://github.com/Anitha1827/bookCollectionBackend.git"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Source code
                </a>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Book Collections</h5>
                  {/* <h6>
                    {" "}
                    username : ani pw: 123 <br />
                    username: test pw: 123
                  </h6> */}
                </div>
                <a
                  href="https://main--glowing-lokum-9b6cce.netlify.app/"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>

          {/* <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={social} alt="project 3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <a
                  href="https://github.com/Anitha1827/social-media-app-frontend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI source code
                </a>
                <a
                  href="https://github.com/Anitha1827/social-media-app-backend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Source code
                </a>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Social Medial Thread</h5>
                  <h6>
                    {" "}
                    username : ani pw: 123 <br />
                    username: test pw: 123
                  </h6>
                </div>
                <a
                  href="https://sparkling-narwhal-ee0e51.netlify.app/auth"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Webscrap} alt="project 3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <a
                  href="https://github.com/Anitha1827/web-scraping-frontend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI source code
                </a>
                <a
                  href="https://github.com/Anitha1827/webscraping_backend"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Source code
                </a>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Web Scraping</h5>
                </div>
                <a
                  href="https://soft-moxie-18d360.netlify.app/"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://content.jdmagicbox.com/comp/def_content/libraries/default-libraries-6.jpg"
                  alt="project 3"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <a
                  href="https://github.com/Anitha1827/library_management_crud"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI source code
                </a>
                <a
                  href="https://6469d79003bb12ac2093b550.mockapi.io/Books"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Source code
                </a>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Library Application</h5>
                </div>
                <a
                  href="https://glowing-basbousa-2993ea.netlify.app/"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={quiz} alt="project 3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <a
                  href="https://github.com/Anitha1827/quizfrontend.git"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI source code
                </a>
                <a
                  href="https://github.com/Anitha1827/quizAppBackend.git"
                  className="card-detail-badge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Source code
                </a>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Library Application</h5>
                </div>
                <a
                  href="https://main--resplendent-malabi-594eaa.netlify.app/"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
