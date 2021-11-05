import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"June, 2021 - Present"}
            title={"Full Stack Developer"}
            subTitle={"Masai School, Banglore"}
            text={
              "Learning Full Stack Developement and Communication skills. "
            }
          />
          <ResumeItem
            year={"2018 - 2021"}
            title={"Mechanical Engineering"}
            subTitle={"Dr Babasaheb Ambedkar Technological University, Maharashtra"}
            text={
              "Got 85% through out the semester. Always active in Extra cirriculum."
            }
          />
          <ResumeItem
            year={"2015 - 2018"}
            title={"Diploma"}
            subTitle={"Government Polytechnic,Miraj. Maharashtra"}
            text={
              "Got 85% in final year. Always active in Extra cirriculum activities."
            }
            />
            <ResumeItem
              year={"2015"}
              title={"High School"}
              subTitle={"Pai. Vishnu nagrale, vidyamandir nagrale. Mahashtra "}
              text={
                "Got 88% in 10th."
              }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  
  .resume-content {

    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
