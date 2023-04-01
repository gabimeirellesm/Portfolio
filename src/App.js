import "./App.css";
import React from "react";
import Navbar from "../src/Components/Navbar.js";
import Home from "./Views/Home";
import About from "./Views/About";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <section id="section1">
        <Home />
      </section>
      <section id="section2">
        <About />
      </section>
      <section id="section3">
        <Projects />
      </section>
      <section id="section4">
        <Contact />
      </section>
    </div>
  );
}

export default App;
