import React from "react";
import "./about.css";
import image from "../../assets/me-about-2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={image} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>50+ Clients Served Till Date</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>40+ Projetcs</small>
            </article>
          </div>
          <p>🚀 Hey there! I'm Dev, a full stack developer with a passion for crafting exceptional digital experiences.</p>
          <p>🌐 Master of All Trades: From front-end finesse to back-end brilliance, I thrive on the dynamic interplay between creativity and code.</p>
          <p>💡 Innovator at Heart: I'm not just a coder; I'm an innovator. Constantly pushing the boundaries of what's possible with cutting-edge tools and frameworks.</p>
          <p>🛠️ Bridging the Gap Seamlessly navigating between front-end aesthetics and back-end functionality to bring ideas to life with elegance and precision.</p>
          <p>🌟 Let's Connect! Ready to build something extraordinary together? Let's collaborate, innovate, and create digital masterpieces that leave a lasting impression.</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
