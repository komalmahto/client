import React, { useEffect, useState, useRef } from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";
import qtopiatext from "../images/qtopia-text.png";
import { Link } from "react-router-dom";
function Footer() {
  // const [screenSize, setScreen] = useState(window.innerWidth);
  // const [array, setArray] = useState([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  // ]);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setScreen(window.innerWidth);
  //     const a = [];
  //     for (var i = 0; i < window.innerWidth / 70; i++) {
  //       a.push(i);
  //     }
  //     setArray(a);
  //   });
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       setScreen(window.innerWidth);

  //       const a = [];
  //       for (var i = 0; i < window.innerWidth / 70; i++) {
  //         a.push(i);
  //       }
  //       setArray(a);
  //     });
  //   };
  // }, [array]);

  return (
    <>
      <div
        className="mt-5"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* {array.length > 0 &&
          array.map((item, val) => {
            return <div className="line" key={val}></div>;
          })} */}
      </div>
      <div className="mt-3 footer " id="footer">
        <div className="content-center px-120">
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
                    <img src={twitter} alt="facebook" />
                  </a>
                  <a href="https://www.linkedin.com/company/qtopia-in/Telegram- https://t.me/qtopia_in">
                    <img src={linkedin} alt="facebook" />
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
                  <div
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <p>@2023</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img src={qtopiatext} alt="Qtopia"></img>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div class="flex justify-around items-center ">
                    <Link
                      to="/policy/in-policy"
                      rel="noreferrer noopener"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <p
                        style={{ color: "white", fontSize: "14px" }}
                        class="cursor-pointer"
                      >
                        Privacy Policy
                      </p>
                    </Link>
                    <div
                      style={{
                        marginBottom: "20px",
                        fontSize: "16px",
                        padding: "0 5px",
                        color: "white",
                      }}
                    >
                      |
                    </div>

                    <Link
                      target="_blank"
                      to="/terms/in-terms"
                      rel="noreferrer noopener"
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        style={{ color: "white", fontSize: "14px" }}
                        class="cursor-pointer"
                      >
                        Terms &amp; Conditions
                      </p>
                    </Link>
                  </div>
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
