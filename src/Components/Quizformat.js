import "./Quizformat.css";
import "../App.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import Slider from "./Slider.js";

function Quizformat() {
  return (
    <>
      {" "}
      <div id="mid-section-container">
        <div id="mid-section">
          <div className="quiz-formats">
            <h3>QUIZ FORMATS</h3>
            <p>Ways to put your trivia kills to the ultimate tests</p>
          </div>

          <div className="row cards mb-4">
            <div className="quiz-content pt-3 col-md-7 pt-1 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className="single-player ">Single Player Quiz</h1>
              <p>
                Are you a one man-army? Play alone to test your knowledge and
                win big.
              </p>
            </div>
            <div className="quiz-image col-md-5  order-2 order-lg-2 d-flex justify-content-center align-items-center ">
              <img class="pt-2" src={img1} alt="img1"></img>
            </div>
          </div>

          <div className="row cards mb-4">
            <div className="quiz-image col-md-5  order-2 order-lg-1 d-flex justify-content-center align-items-center ">
              <img class="pt-2" src={img2} alt="img1"></img>
            </div>
            <div className=" quiz-content pt-3 col-md-7 pt-1 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
              <h1 className="single-player ">Multiplayer Quiz</h1>
              <p>
                Standing out in a group always makes us happy.Play with others
                and taste the fun.
              </p>
            </div>
          </div>

          <div className="row cards mb-4">
            <div className="quiz-content pt-3 col-md-7 pt-1 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className="single-player ">Challenge your peers</h1>
              <p>
                Challenge your peers in the quiz battleground and see who wins.
              </p>
            </div>
            <div className="quiz-image col-md-5  order-2 order-lg-2 d-flex justify-content-center align-items-center ">
              <img class="pt-2" src={img3} alt="img1"></img>
            </div>
          </div>

          <div className="row cards mb-4">
            <div className="quiz-image col-md-5  order-2 order-lg-1 d-flex justify-content-center align-items-center ">
              <img class="pt-2" src={img4} alt="img1"></img>
            </div>
            <div className="quiz-content pt-3 col-md-7 pt-1 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
              <h1 className="single-player ">Quiz Tournaments</h1>
              <p>
                Tournaments will bring you the thrilling experience of a
                war-styled quiz. Get rewarded for crossing each level. 
              </p>
            </div>
          </div>
          <div className="row cards mb-4">
            <div className="quiz-content  pt-3 col-md-7 pt-1 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className="single-player ">Topic-Based Quiz</h1>
              <p>
                Do you consider yourself a subject matter expert? Then let’s
                test if you can verify your claim.
              </p>
            </div>
            <div className="quiz-image col-md-5  order-2 order-lg-2 d-flex justify-content-center align-items-center ">
              <img class="pt-2" src={img5} alt="img1"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quizformat;
