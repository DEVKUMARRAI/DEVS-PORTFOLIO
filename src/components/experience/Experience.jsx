import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
const Experience = () => {
  return (
    <section id="experience">
      <h5>These Are My Skills !!</h5>
      <h2>Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <ImHtmlFive className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCss3 className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiJavascript className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaReact className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaBootstrap className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaGithub className='experience_details-icon'/>
              <div>
                <h4>Git/Github</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiNodedotjs className='experience_details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMongodb className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPhp className='experience_details-icon'/>
              <div>
                <h4>Php</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMysql className='experience_details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
