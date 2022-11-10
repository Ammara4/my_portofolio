import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./assets/css/index.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const changeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const changeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };
  const changeSubject = (e) => {
    setData({
      ...data,
      subject: e.target.value,
    });
  };
  const changeMessage = (e) => {
    setData({
      ...data,
      message: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const register = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    axios
      .post("http://localhost:5000/api/v1", register)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`404- Data couldn't saved due to reasons ${err}`);
      });
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Lahore</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>ammarasal001@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+92 0000</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form action="" method="" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={data.name}
                      onChange={changeName}
                      required
                    ></input>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={data.email}
                      onChange={changeEmail}
                      required
                    ></input>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={data.subject}
                    onChange={changeSubject}
                    required
                  ></input>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    value={data.message}
                    onChange={changeMessage}
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <Button type="submit" onClick={submitHandler}>
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
