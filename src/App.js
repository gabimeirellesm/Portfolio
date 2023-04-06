import "./App.css";
import React from "react";
import Home from "./Views/Home";
import About from "./Views/About";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
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
      <Footer />
    </div>
  );
}

export default App;
