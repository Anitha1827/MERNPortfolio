import React from "react";
import { SiReactquery } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="March 2022 - March 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReactquery />}
            >
              <h3 className="vertical-timeline-element-title">
                Front End Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Iween Software Solution
              </h4>
              <p>
                Contributed to the development of web applications using HTML,
                CSS, Bootstrap, and JavaScript. Implemented interactive features
                and collaborated with backend teams to integrate frontend
                components.
              </p>
              <a href="http://iweensoft.com/">http://iweensoft.com/</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May 2021 - February 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReactquery />}
            >
              <h3 className="vertical-timeline-element-title">
                Front End Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                TravelPd Software Pvt, Ltd.,
              </h4>
              <p>
                Collaborated with the development team to create and maintain
                visually appealing and responsive web applications. Translated
                design concepts into functional web interfaces using HTML, CSS,
                and Bootstrap. Contributed to improving user experience through
                careful design implementation.
              </p>
              <a href="https://travelpd.com/">https://travelpd.com/</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jan 2018 - Jan2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReactquery />}
            >
              <h3 className="vertical-timeline-element-title">
                Relationship Executive
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SKODA AUTOMOBILE
              </h4>
              <p>
                Managed front desk operations, including welcoming visitors and
                addressing inquiries. Handled phone calls, directed queries to
                appropriate departments, and maintained a professional and
                organized reception area. Assisted in scheduling appointments
                and managing administrative tasks to ensure smooth daily
                operations.
              </p>
              <a href="http://www.vinayakcars.com/">
                http://www.vinayakcars.com/
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
