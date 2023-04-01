import React from "react";
import perfil from "../Images/perfil.png";

function About() {
  return (
    <div className="about">
      <img src={perfil} alt="foto Gabriela Meirelles" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero
          in lorem euismod euismod quis ac enim. Fusce ac sodales tellus. Sed
          fringilla tellus quis ante pretium malesuada. Ut gravida, nulla vel
          porttitor tincidunt, mi sapien iaculis nunc, ut pharetra tortor ex
          eget augue. Donec ac efficitur magna.
        </p>
        <p>
          Donec aliquet elit eget mauris interdum rhoncus. Nunc id purus auctor,
          semper mauris sed, lobortis elit. Donec viverra augue vel lorem
          rhoncus, in cursus mauris blandit. Vivamus quis tellus vel metus
          ultricies fermentum. Aenean vel ante arcu. Integer a eros sit amet
          odio tincidunt euismod. Suspendisse suscipit risus vitae lorem
          egestas, ac dapibus libero molestie. Integer porttitor, magna a
          bibendum pulvinar, orci enim efficitur turpis, id auctor augue magna
          sit amet lacus. In in felis sed justo ultricies sagittis eu nec massa.
        </p>
      </div>
      <style jsx="true">{`
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
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .about-text p {
          font-size: 1.2rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
}

export default About;
