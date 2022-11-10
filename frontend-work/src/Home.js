import React from "react";
import "./assets/css/index.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>Ammara</h1>
          <h2>I'm a Developer from Pakistan</h2>
          <Button className="about-btn" href="/about">
            About Me
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
