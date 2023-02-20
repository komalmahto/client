import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
function A() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div id="slider">
      <div id="mid-section-container">
        <div id="mid-section">
          <div className="quiz-formats">
            <h3>TESTIMONIALS</h3>
            <p>What our users have to say about us</p>
          </div>
          <div className="sliderContainer">
            <Slider {...settings}>
              {[
                {
                  h1: "Amit Agarwal",
                  p: "The quizzes of Qtopia is fun. Whether you win or loose, 100% fun is guaranteed",
                },
                {
                  h1: "Srishti Shukla",
                  p: " Their quiz tournament are best in the country. Opprtunity to win in lakhs",
                },
                {
                  h1: "Anand Vaibhav",
                  p: "I often challenge my friend to test our knowledge. Sometimes I loose, sometimes I win but I learn everytime I play",
                },
                {
                  h1: "Anand Vaibhav",
                  p: "I often challenge my friend to test our knowledge. Sometimes I loose, sometimes I win but I learn everytime I play",
                },
              ].map((item, idx) => {
                return (
                  <div className="testimonials-wrapper">
                    <div
                      className="testimonials"
                      style={{
                        backgroundColor: idx % 2 === 0 ? "#A3A7DE" : "#276FCE",
                      }}
                    >
                      <div className="testimonials-content">
                        <h1>{item.h1}</h1>
                        <p>{item.p}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A;
