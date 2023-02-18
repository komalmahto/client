import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Slider from "./Components/Slider.js";
import Footer from "./Components/Footer";
import "./App.css";
import About from "./Components/About";
import Quizformat from "./Components/Quizformat";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quizformat />
      <About />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
