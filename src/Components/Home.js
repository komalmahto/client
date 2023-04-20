import React from "react";
import Slider from "./Slider.js";
import Footer from "./Footer";

import About from "./About";
import Quizformat from "./Quizformat";
import Hero from "./Hero";
import Navbar from "./Navbar";
function Home() {
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

export default Home;
