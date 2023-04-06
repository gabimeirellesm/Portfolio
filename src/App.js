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
      <style jsx="true">{`
        section {
          position: relative;
          padding: 0;
          margin: 0;
          margin-bottom: 3rem;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        #section4 {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
