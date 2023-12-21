import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skill from "./component/Skill";
import About from "./component/About";
import Projects from "./component/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <About />
      <Projects />
    </>
  );
};

export default App;
