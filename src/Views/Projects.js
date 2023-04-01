import React from "react";
import gifScaryGame from "../Images/gifScaryGame.gif";
import gifTraceYourRoad from "../Images/gifTraceYourRoad.gif";
import gifDrinkGenerator from "../Images/gifDrinkGenerator.gif";

function Projects() {
  return (
    <div className="projects">
      <a href="https://gabimeirellesm.github.io/Project1/">
        <img src={gifScaryGame} alt="link to scary game project" />
      </a>
      <a href="https://trace-your-road.cyclic.app/">
        <img src={gifTraceYourRoad} alt="link to trace your road project" />
      </a>
      <a href="https://drinkgenerator.netlify.app/">
        <img src={gifDrinkGenerator} alt="link to drink generator project" />
      </a>
      <span />
      <a href="https://gabimeirellesm.github.io/Project1/">
        <img src={gifScaryGame} alt="link to scary game project" />
      </a>
      <a href="https://trace-your-road.cyclic.app/">
        <img src={gifTraceYourRoad} alt="link to trace your road project" />
      </a>
      <a href="https://drinkgenerator.netlify.app/">
        <img src={gifDrinkGenerator} alt="link to drink generator project" />
      </a>
      <span />
      <a href="https://gabimeirellesm.github.io/Project1/">
        <img src={gifScaryGame} alt="link to scary game project" />
      </a>
      <a href="https://trace-your-road.cyclic.app/">
        <img src={gifTraceYourRoad} alt="link to trace your road project" />
      </a>
      <a href="https://drinkgenerator.netlify.app/">
        <img src={gifDrinkGenerator} alt="link to drink generator project" />
      </a>
      <span />
      <style jsx="true">{`
        .projects {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          scroll-behavior: smooth;
          white-space: nowrap;
          animation: scroll-projects 30s linear infinite;
        }

        .projects img {
          width: calc(100vw / 3);
          height: calc((100vw / 3) * 0.6);
          margin-right: 20px;
        }

        .projects span {
          display: inline-block;
          width: calc(100vw / 3);
        }
      `}</style>
    </div>
  );
}

export default Projects;
