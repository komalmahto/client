import logo from "./logo.svg";
import "./App.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import Slider from "./Components/Slider.js";
function App() {
  return (
    <>
      <div id="mid-section-container">
        <div id="mid-section">
          <div className="quiz-formats">
            <h3>QUIZ FORMATS</h3>
            <p>Ways to put your trivia kills to the ultimate tests</p>
          </div>

          <div className="quiz-formats-type">
            <div className="quiz-formats-wrapper image-left">
              <div className="quiz-formats-type-content-left">
                <h1 className="single-player">Single Player Quiz</h1>
                <p>
                  Are you a one man-army? Play alone to test your knowledge and
                  win big.
                </p>{" "}
              </div>
              <div className="quiz-formats-type-image-right">
                <img src={img1} alt="img1"></img>
              </div>
            </div>
          </div>

          <div className="quiz-formats-type">
            <div className="quiz-formats-wrapper image-right">
              <div className="quiz-formats-type-image-right">
                <img src={img2} alt="img1"></img>
              </div>

              <div className="quiz-formats-type-content-left">
                <h1 className="single-player">Multiplayer Quiz</h1>
                <p>
                  Standing out in a group always makes us happy.Play with others
                  and taste the fun.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="quiz-formats-type">
            <div className="quiz-formats-wrapper image-left">
              <div className="quiz-formats-type-content-left">
                <h1 className="single-player">Challenge your peers</h1>
                <p>
                  Challenge your peers in the quiz battleground and see who
                  wins.
                </p>{" "}
              </div>
              <div className="quiz-formats-type-image-right">
                <img src={img3} alt="img1"></img>
              </div>
            </div>
          </div>

          <div className="quiz-formats-type">
            <div className="quiz-formats-wrapper image-right">
              <div className="quiz-formats-type-image-right">
                <img src={img4} alt="img1"></img>
              </div>

              <div className="quiz-formats-type-content-left">
                <h1 className="single-player">Quiz Tournaments</h1>
                <p>
                  Tournaments will bring you the thrilling experience of a
                  war-styled quiz. Get rewarded for crossing each level. 
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="quiz-formats-type">
            <div className="quiz-formats-wrapper image-left">
              <div className="quiz-formats-type-content-left">
                <h1 className="single-player">Topic-Based Quiz</h1>
                <p>
                  Do you consider yourself a subject matter expert? Then let’s
                  test if you can verify your claim.
                </p>{" "}
              </div>
              <div className="quiz-formats-type-image-right">
                <img src={img5} alt="img1"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mid-section-container">
        <div id="mid-section">
          <div className="quiz-formats">
            <h3>ABOUT US</h3>
            <p>Welcome to Qtopia,where knowledge meets fun!</p>
          </div>
          <div className="quiz-about">
            <div className="quiz-about-wrapper">
              <img src={img6} alt={"discuss"} />
            </div>
            <div className="quiz-about-wrapper">
              {" "}
              <div style={{ flex: "0.333" }}>
                <h1>Our Belief</h1>
                <p>
                  We believe learning should be enjoyable. Our platform offers
                  diverse quizzes on various subjects, from general knowledge to
                  pop culture.
                </p>
              </div>
              <div style={{ flex: "0.333" }}>
                <h1>Our Aim</h1>
                <p>
                  Our aim is to provide interactive and challenging quizzes with
                  monetization opportunities, updated regularly with current
                  trends.
                </p>
              </div>
              <div style={{ flex: "0.333" }}>
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
      <Slider />
    </>
  );
}

export default App;
