import React from "react";
import "./assets/css/index.css";
import Card from "react-bootstrap/Card";

const data = [
  {
    heading: "Super Hero API",
    Content:
      "The Superhero API is an application programming interface that provides data and information about a list of superheroes from the comic universe.",
  },
  {
    heading: "JS Stop Watch",
    Content:
      "JavaScript stop watch or rather stop down timer can be implemented using the JavaScript timing methods which are executed in time intervals",
  },
  {
    heading: "JS Calculator",
    Content:
      "A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.",
  },
  {
    heading: "loreum ipsum",
    Content:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    heading: "loreum ipsum",
    Content:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    heading: "loreum ipsum",
    Content:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
];

const Info = () => {
  return (
    <>
      <section id="projects" class="services">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div className="container">
          <div className="cards">
            {data.map((content) => {
              const { heading, Content } = content;

              return (
                <div className="content">
                  <h4>
                    <b>{heading}</b>
                  </h4>
                  <p>{Content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
