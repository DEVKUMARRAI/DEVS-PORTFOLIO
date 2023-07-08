import React from "react";
import "./about.css";
import image from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className="aboutme">About Me</h2>
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
              <small>20+ Clients Served Till Date</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Projetcs</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            sapiente delectus nihil excepturi assumenda atque qui repudiandae
            vero quia saepe est porro, architecto fugit eius exercitationem unde
            nulla optio eum nostrum temporibus pariatur obcaecati?
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
