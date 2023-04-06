import React from "react";
import gifScaryGame from "../Images/gifScaryGame.gif";
import gifTraceYourRoad from "../Images/gifTraceYourRoad.gif";
import gifDrinkGenerator from "../Images/gifDrinkGenerator.gif";

function Projects() {
  return (
    <section className="container">
      <div className="projects-text">
        <div className="title-container">
          <h2>My projects</h2>
        </div>
        <div className="text-container">
          <p className="pLeft">
            The projects involved the construction of applications and software
            using various technologies such as CSS, JavaScript, MongoDB,
            Node.js, Express.js, Bootstrap, Handlebars, Axios, and REST APIs.
            These projects included the creation of a cocktail recipe generator,
            a travel tracking application where users can select and comment on
            visited countries, and a horror game using JavaScript, HTML and
            Canvas.
          </p>
          <div class="vl"></div>
          <p className="pRight">
            Each project were completed in 4 days for Ironhack, and I aimed to
            apply the concepts and skills learned in the development of
            applications and software. All of these projects were completed
            during my learning and practice period, and I would be happy to
            receive any contributions and feedback. Today, I work on an internal
            project building a mobile application using React Native.
          </p>
        </div>
      </div>
      <div className="gifProjects">
        <a
          href="https://gabimeirellesm.github.io/Project1/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gifScaryGame} alt="link to scary game project" />
        </a>

        <a
          href="https://trace-your-road.cyclic.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gifTraceYourRoad} alt="link to trace your road project" />
        </a>

        <a
          href="https://drinkgenerator.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gifDrinkGenerator} alt="link to drink generator project" />
        </a>
      </div>
      <style jsx="true">{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Montserrat:wght@500&display=swap");
        .container {
          margin: 50px 0;
        }

        .title-container {
          margin-left: 4rem;
          margin-right: 4rem;
        }

        h2 {
          font-family: "Montserrat", sans-serif;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .text-container {
          display: flex;
          align-items: center;
          margin-left: 4rem;
          margin-right: 4rem;
        }

        .text-container p {
          font-size: 1.2rem;
          line-height: 1.5;
          font-family: "Amiri Quran", serif;
        }

        .pLeft {
          margin-right: 4rem;
        }

        .pRight {
          margin-left: 4rem;
        }
        .vl {
          border-left: 2.5px solid #181818;
          height: 13rem;
        }

        .gifProjects {
          display: flex;
          justify-content: space-around;
        }
        .gifProjects a {
        }

        .gifProjects img {
          width: 29rem;
          margin-top: 5rem;
          margin-bottom: 5rem;
          height: 15rem;
        }

        @media only screen and (max-width: 768px) {
          .projects-text {
            margin: 5rem;
            margin-top: 0;
          }
          .text-container {
            display: flex;
            flex-direction: column;
            margin: 0;
          }

          h2 {
            margin-bottom: 1rem;
            margin-right: 0;
            margin-left: 0;
          }

          .pLeft {
            margin: 0;
          }

          .pRight {
            margin: 0;
          }

          .vl {
            border-left: none;
            border-bottom: 2.5px solid #181818;
            width: 15%;
            margin-top: 1rem;
            margin-bottom: 1rem;
            height: 0;
          }

          .gifProjects {
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
          }

          .gifProjects a {
            margin-bottom: 2rem;
          }

          .gifProjects img {
            width: 100%;
            margin: 0;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
