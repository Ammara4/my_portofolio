import React from "react";
import picture from "./assets/img/about.jpg";
import * as Icons from "react-bootstrap-icons";
import "./assets/css/index.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import WebFont from "webfontloader";

const about = [
  {
    title: "Website",
    subjects: "www.example.com",
  },
  {
    title: "Phone",
    subjects: "00000",
  },
  {
    title: "City",
    subjects: "Lahore",
  },
  {
    title: "Degree",
    subjects: "Master",
  },
  {
    title: "Email",
    subjects: "ammarasal001@gmail.com",
  },
  {
    title: "Freelsnce",
    subjects: "Available",
  },
];

const About = () => {
  return (
    <>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Learn More About Me</h2>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img src={picture} class="img-fluid" alt="logo"></img>
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 ">
              <h3>Web Developer</h3>
              <p class="fst-italic">
                Learning is never done without errors and defeat
              </p>

              <div class="row">
                <div class="col-lg-6">
                  <ul className="headings">
                    <li>
                      <strong>Website:</strong> www.example.com
                    </li>
                    <li>
                      <strong>Phone:</strong> +92 00000
                    </li>
                    <li>
                      <strong>City:</strong>
                      City : Lahore
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul className="headings">
                    <li>
                      <strong>Degree:</strong> Master
                    </li>
                    <li>
                      <strong>Email:</strong> ammarasal001@gmail.com
                    </li>
                    <li>
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                “For the things we have to learn before we can do them, we learn
                by doing them.”
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="skills">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Skills</h2>
          </div>

          <div class="row skills-content">
            <div class="skills">
              <div className="my-2">
                <span class="skill">
                  HTML <i class="val">100%</i>
                </span>

                <ProgressBar variant="info" animated now={100} />
              </div>
              <div className="my-3">
                <span class="skill">
                  CSS <i class="val">90%</i>
                </span>
                <ProgressBar variant="info" animated now={90} />
              </div>
              <div className="my-3">
                <span class="skill">
                  JS <i class="val">70%</i>
                </span>
                <ProgressBar variant="info" animated now={70} />
              </div>
              <div className="my-3">
                <span class="skill">
                  React <i class="val">40%</i>
                </span>
                <ProgressBar variant="info" animated now={40} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
