import React from "react";
import img6 from "../images/img6.png";
import "./about.css";
function About() {
  return (
    <div id="about">
      <div id="mid-section-container">
        <div id="mid-section">
          <div className="quiz-formats">
            <h3>ABOUT US</h3>
            <p>Welcome to Qtopia,where knowledge meets fun!</p>
          </div>
          <div className="quiz-about">
            <div className="quiz-about-wrapper1">
              <img src={img6} alt={"discuss"} />
            </div>
            <div className="quiz-about-wrapper2">
              {" "}
              <div className="mb-5 quiz-about-content">
                <h1>Our Belief</h1>
                <p>
                  We believe learning should be enjoyable. Our platform offers
                  diverse quizzes on various subjects, from general knowledge to
                  pop culture.
                </p>
              </div>
              <div className="mb-5 quiz-about-content">
                <h1>Our Aim</h1>
                <p>
                  Our aim is to provide interactive and challenging quizzes with
                  monetization opportunities, updated regularly with current
                  trends.
                </p>
              </div>
              <div className="mb-5 quiz-about-content">
                <h1>Our Service</h1>
                <p>
                  Whether you're looking to improve your trivia skills,
                  challenge your friends, or simply pass the time, Qtopia is the
                  perfect destination for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
