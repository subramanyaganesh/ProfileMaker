import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <div>
      <section id="about">
        <h5>Get To Know </h5>
        <h2> About Me</h2>

        <div className="container about__container">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Around 4 years of Work Experience</small>
              </article>
            </div>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Epics With Several Projects</small>
            </article>
          </div>
          <p className="paragraph">
            Tech enthusiast with a Masters in Computer Science and close to 4
            years of work experience, with a proven track record of innovation.
            Highlights include winning the best fintech startup award at
            OraHacks, developing a chatbot for Illinois Institute of Technology
            utilizing retrieval augmented generation (RAG), receiving awards at
            ServiceNow, and a strong background in advanced automation tools. I
            aim to bring my skills and experience to help organizations in
            developing efficient and reliable backend applications.
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;
