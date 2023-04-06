import React from "react";
import perfil from "../Images/perfil.png";

function About() {
  return (
    <section>
      <div className="about">
        <img src={perfil} alt="foto Gabriela Meirelles" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Gabi! I'm a student of Administration and I have experience
            in web and mobile development. With a passion for technology and
            innovation, I decided to pursue knowledge in software development,
            learning languages such as JavaScript and Java.
          </p>
          <p>
            I'm always looking for challenges and opportunities to learn and
            grow in my career. I strive to improve my skills through courses and
            personal projects, as well as being willing to learn from my
            colleagues. My curiosity, dedication, and ease in learning are
            qualities that contribute to the success of a development team.
          </p>
          <p>
            With previous work in administration and experience in various
            sectors, with a focus on fashion and retail, I developed a keen
            ability to deal with people and their needs. This ability along with
            my passion for technology has allowed me to further develop a sharp
            eye for design and beauty, resulting in the creation of innovative
            solutions. I believe all of this facilitates applying my creativity
            and sensitivity to create intuitive and attractive interfaces.
          </p>
        </div>
        <style jsx="true">{`
          @import url("https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Montserrat:wght@500&display=swap");
          .about {
            display: flex;
            align-items: center;
            margin: 50px 0;
          }

          .about img {
            max-width: 50%;
            margin-right: 50px;
          }

          .about-text {
            flex: 1;
          }

          .about-text h2 {
            font-family: "Montserrat", sans-serif;
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .about-text p {
            font-size: 1.2rem;
            line-height: 1.5;
            margin-bottom: 1.5rem;
            margin-right: 1rem;
            font-family: "Amiri Quran", serif;
          }
        `}</style>
      </div>
    </section>
  );
}

export default About;
