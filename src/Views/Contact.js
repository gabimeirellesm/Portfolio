import React, { useState } from "react";
import iconGithub from "../Images/iconGithub.png";
import iconLinkedin from "../Images/iconLinkedin.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
    };
    console.log(data);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="section4">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>LET'S WORK TOGETHER</h2>
          <p>
            Feel free to leave me a message via the form, or you can get a hold
            of me at gb.meirellesmartins@gmail.com
          </p>
          <p>Lets create something beautiful and impactful.</p>
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
          action="https://formspree.io/f/xyylbejy"
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
      <style jsx>{`
        #section4 {
          background-color: #f4f4f4;
          padding: 80px 0;
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
          width: 3rem;
        }

        .contact-info hr {
          width: 75%;
          border: 0;
          height: 3px;
          background-color: #181818;
          margin: 50px auto;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
        }

        .contact-form {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2rem;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: none;
          font-size: 1.2rem;
          color: #333;
          background-color: #fff;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease-in-out;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }

        .contact-form textarea {
          height: 150px;
        }

        .contact-form button[type="submit"] {
          background-color: #181818;
          color: #fff;
          padding: 10px 20px;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .contact-form button[type="submit"]:hover {
          background-color: #fff;
          color: #333;
          border: 1px solid #333;
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
