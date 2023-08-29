import React from "react";
import gifHomePage from "../Images/gifHomePage.gif";
import Cv from "../Components/Cv";

function Home() {
  return (
    <section>
      <Cv />
      <img src={gifHomePage} alt="video da Gabriela correndo em um jardim" />
      <style jsx="true">{`
        img {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media only screen and (max-width: 768px) {
          img {
            position: relative;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
