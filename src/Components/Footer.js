import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";
import qtopiatext from "../images/qtopia-text.png";
function Footer() {
  return (
    <>
      {/* <p style={{ border: "1px dashed #004AAD" }}></p> */}
      <div className="footer mt-5" id="footer">
        <div className="footer-wrapper">
          <div className="comp1">
            <img src={logo} alt="logo" />
          </div>
          <div className="comp2">
            <div className="footer-center-content">
              <div className="icons-wrapper">
                <a href=" https://www.facebook.com/Qtopia-100787929589772">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/qtopia_in/">
                  <img src={instagram} alt="facebook" />
                </a>

                <a href="https://twitter.com/qtopia_in">
                  {" "}
                  <img src={twitter} alt="facebook" />
                </a>
                <a href="https://www.linkedin.com/company/qtopia-in/Telegram- https://t.me/qtopia_in">
                  <img src={linkedin} alt="facebook" />
                </a>
                <a href="https://www.youtube.com/">
                  {" "}
                  <img src={youtube} alt="facebook" />
                </a>
              </div>
              <p style={{ color: "#FFFFFF" }}>
                sachin@qtopia.in | +91-6361629230
              </p>
            </div>
          </div>
          <div className="comp3">
            <div className="footer-center-content">
              <div className="comp3-wrapper">
                <div>
                  {" "}
                  <p>@2023</p>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <img src={qtopiatext} alt="Qtopia"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
