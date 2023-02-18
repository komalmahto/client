import React, { useState } from "react";
import "./Hero.css";
import user from "../images/user.png";
import telegramicon from "../images/telegramicon.png";
import axios from "axios";
import { USER_SERVER } from "../Config";
import ImageCarosel from "./ImageCarosel";
import Modal from "./Modal";
function Hero() {
  const [images, setImages] = useState([]);
  const [model, setModel] = useState(false);
  const img = [
    "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdnuRYL5NEno9_cKqcynTuixJaphYYJOqpWhWQkra_w&s",
  ];
  const getImages = async () => {
    try {
      await axios.get(`${USER_SERVER}/getimages`).then((res) => {
        console.log(res.data);
        setImages(res.data);
        setModel(true);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="hero-top" style={{ backgroundColor: "#004AAD" }}>
      <div className="row hero">
        <div className="col-md-7 pt-1 pt-lg-0 order-2 order-md-1 order-lg-1 d-flex justify-content-center flex-column">
          <div className="hero-sec-wrapper">
            <h1>QUIZ, LEARN AND LEARN!</h1>
            <p>
              Join the quizzing revolution and turn your trivia into riches.
              Join our telegram channel now!
            </p>
            <a href="https://t.me/qtopia_in">
              <button className="btn-get-started main-color" target="_blank">
                <div className="button-content">
                  <span>
                    <img
                      className="telegramIcon"
                      src={telegramicon}
                      alt="telegram"
                    />
                  </span>
                  <span className="pt-2 button-text">JOIN NOW</span>
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="hero-image col-md-5  order-1 order-md-2 order-lg-2 d-flex justify-content-center align-items-center ">
          <img src={user} className="img-fluid " alt="komal" />
        </div>
      </div>
      <div className="checkoutWrapper">
        <div className="checkout">
          <button className="checkoutContent" onClick={getImages}>
            Checkout our daily ‘WOW’ facts!
          </button>
        </div>
      </div>
      {model === true ? (
        <Modal images={images} hide={() => setModel(false)} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Hero;
