import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import resume from "../img/resume.png";
import PrimaryButton from "./PrimaryButton";
import "../App.css";
function ImageSection() {
  const infoo = useRef();
  useEffect(() => {
    init(infoo.current, {
      showCursor: false,
      backSpeed: 100,
      startDelay: 500,
      backDelay: 800,
      strings: ["Vishal Sudam Patil", "A Web Developer", "A Problem Solver"],
    });
  }, []);
  return (
    <ImageSectionStyled>
      <div className="right-content">
        <h4>
          I am <span ref={infoo}></span>
        </h4>
        <p className="paragraph">
        {"  "}As a MERN stack developer with over 1 year of experience, I have a
          strong foundation in building robust web applications using MySQL,MongoDB,
          Express, React, and Node.js. I possess expertise in developing
          responsive and user-friendly front-end interfaces, designing and
          developing scalable back-end architectures, and implementing RESTful
          APIs to provide seamless communication between the client and server.{" "}
        </p>
        <p className="paragraph">
          {"  "}I am a highly motivated individual with excellent problem-solving
          skills, and I am always eager to learn and adapt to new technologies
          and tools. I am confident in my ability to contribute to any
          development team and thrive in a fast-paced and dynamic work
          environment.
        </p>
        <div className="about-info"></div>
        <PrimaryButton title={"Download Resume"} resu={"/Vishal Patil.pdf"}>
          {" "}
        </PrimaryButton>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .right-content {
    width: 90%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
