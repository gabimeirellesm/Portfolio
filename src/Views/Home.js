import React from "react";
import gifHomePage from "../Images/gifHomePage.gif";
import { RiArrowDownSLine } from "react-icons/ri";
import Cv from "../Components/Cv";

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.requestAnimationFrame(() => {
        const nextElement = element.nextElementSibling;
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  };

  return (
    <section>
      <Cv />
      {/*       <section className="home-button-container">
        <button onClick={() => scrollToSection("section1")} className="arrow">
          <RiArrowDownSLine />
        </button>
        <style jsx="true">{`
          .home-button-container {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 9999;
            margin: 1rem 2rem;
          }

          .arrow {
            font-size: 30px;
            color: #555;
            border: none;
            background-color: transparent;
            cursor: pointer;
            padding: 0;
            margin: 0;
          }

          .arrow:hover {
            background-color: #181818;
            max-height: 30px;
            color: #fff;
          }
        `}</style>
      </section> */}
      <img src={gifHomePage} alt="video Gabriela Meirelles" />
      <style jsx="true">{`
        img {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}

export default Home;
