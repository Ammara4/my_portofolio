import React from "react";
import "./assets/css/index.css";
const Resume = () => {
  return (
    <>
      <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Resume</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6">
             

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Becholars In Computer Science</h4>
                <h5>2020-Cont..</h5>
                <p>
                  <em>NCBA&E</em>
                </p>
                <p>
                3.80CGPA
                </p>
              </div>
              <div class="resume-item">
                <h4>Intermediate</h4>
                <h5>2017-2019</h5>
                <p>
                  <em>Unique College</em>
                </p>
                <p>
                  77.7%
                </p>
              </div>
              <div class="resume-item">
                <h4>Matric</h4>
                <h5>2015-2017</h5>
                <p>
                  <em>LFHS</em>
                </p>
                <p>
                  88%
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Web Deigning</h4>
                <h5>2019 - Present</h5>
                <p>
                  <em>Experion, New York, NY </em>
                </p>
                <p>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.
                    </li>
                    
                  </ul>
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
