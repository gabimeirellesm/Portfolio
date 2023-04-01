import React from "react";
import gifHomePage from "../Images/gifHomePage.gif";

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
