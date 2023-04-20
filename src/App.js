import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Slider from "./Components/Slider.js";
import Footer from "./Components/Footer";
import "./App.css";
import About from "./Components/About";
import Quizformat from "./Components/Quizformat";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy.js";
import Home from "./Components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms/in-terms" element={<Terms />} />
          <Route path="/policy/in-policy" element={<Privacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
