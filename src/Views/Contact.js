import React from "react";
import iconGithub from "../Images/iconGithub.png";
import iconLinkedin from "../Images/iconLinkedin.png";

function Contact() {
  return (
    <section>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>LET'S WORK TOGETHER</h2>
          <p>
            I'm a firm believer in the power of collaboration to achieve
            innovative and effective solutions. Let's team up and bring your
            ideas to life! Whether you prefer to use the contact form or email
            me at <strong>gb.meirellesmartins@gmail.com</strong>, I'm excited to
            hear from you.
          </p>
          <p>Together, we can craft something truly remarkable.</p>
          <hr />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/gabriela-meirelles-martins/">
                <img src={iconLinkedin} alt="Link to Linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/gabimeirellesm">
                <img src={iconGithub} alt="Link to Github" />
              </a>
            </li>
          </ul>
        </div>
        <form
          className="contact-form"
          method="post"
          action="https://formspree.io/f/mzbqjnez"
        >
          <input type="text" name="name" placeholder="Name*" required />
          <input
            type="email"
            name="_replyto"
            placeholder="Email Address*"
            required
          />
          <input type="tel" name="phone" placeholder="Phone" />
          <input
            type="text"
            name="_subject"
            placeholder="What's this regarding?*"
            required
          />
          <textarea name="message" placeholder="Message*" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <style jsx="true">{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Montserrat:wght@500&display=swap");
        #section4 {
          background-color: #f4f4f4;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
        }

        .contact-wrapper {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
        }

        .contact-info {
          width: 40%;
          font-size: 1.2rem;
          color: #333;
          text-align: left;
          margin-left: 2rem;
          margin-right: 2rem;
        }

        .contact-info ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-info li {
          margin-right: 20px;
        }

        .contact-info img {
          width: 2rem;
        }

        .contact-info hr {
          width: 65%;
          border: 0;
          height: 2.5px;
          background-color: #181818;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        .contact-info h2 {
          font-family: "Montserrat", sans-serif;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .contact-info p {
          font-size: 1.2rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          margin-right: 1rem;
          font-family: "Amiri Quran", serif;
        }
        .contact-form {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2rem;
          font-family: "Amiri Quran", serif;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          margin-bottom: 30px;
          border: none;
          font-size: 1rem;
          color: #333;
          background-color: #fff;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease-in-out;
          font-family: "Amiri Quran", serif;
          padding-left: 1rem;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }

        .contact-form textarea {
          height: 150px;
          font-family: "Amiri Quran", serif;
        }

        .contact-form button[type="submit"] {
          background-color: #181818;
          color: #fff;
          padding: 10px 20px;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          font-family: "Montserrat", sans-serif;
        }

        .contact-form button[type="submit"]:hover {
          background-color: #fff;
          color: #333;
          border: 1px solid #333;
          font-family: "Montserrat", sans-serif;
        }

        @media screen and (max-width: 768px) {
          .contact-wrapper {
            flex-direction: column;
          }
          .contact-info,
          .contact-form {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
