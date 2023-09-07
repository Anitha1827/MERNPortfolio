import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="conatiner project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />

        <p className="pb-3 text-center">
          here are my top 3 recent projects with live links and source code here
          are my top 3 recent projects with live links and source code here are
          my top 3 recent projects with live links and source code here are my
          top 3 recent projects with live links and source code here are my top
          3 recent projects with live links and source code here are my top 3
          recent projects with live links and source code here are my top 3
          recent projects with live links and source code here are my top 3
          recent projects with live links and source code here are my top 3
          recent projects with live links and source code here are my top 3
          recent projects with live links and source code
        </p>

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
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Video Chating Application</h5>
                </div>
                <a href="view" className="ad-btn">
                  View
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
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Techinfoyt Shopping App Website
                  </h5>
                </div>
                <a href="view" className="ad-btn">
                  View
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
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Library Application</h5>
                </div>
                <a href="view" className="ad-btn">
                  View
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
