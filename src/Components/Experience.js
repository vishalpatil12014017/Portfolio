import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ExperienceItem from "../Components/ExperienceItem";

function Experience() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  function gateDate(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // Calculate the difference in months
    const diffInMonths =
      (date2.getFullYear() - date1.getFullYear()) * 12 +
      (date2.getMonth() - date1.getMonth());

    // Calculate the years and remaining months
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    return `${years > 1 ? years + " years" : years + " year"}  and ${
      months > 1 ? months + " months" : months + " month"
    }`;
  }
  return (
    <ResumeStyled>
      <Title
        icon={school}
        icon={school}
        title={"Experience"}
        span={"Experience"}
      />
      <InnerLayout>
        <div className="resume-content ">
          <ExperienceItem
            year={`Feb, 2022 - Present`}
            months={`${gateDate("2022-02-01", new Date())}`}
            title={"Full Stack Engineer"}
            subTitle={"Hexahealth, Gurgram"}
            text={
              "Full Stack Engineer - Building and Scaling End-to-End Web Applications And Mobile Applications. "
            }
          />
          <ExperienceItem
            year={`June, 2021 - Feb, 2022`}
            months={`8 months`}
            title={"Full Stack Developer Trainee"}
            subTitle={"Masai School, Banglore"}
            text={"Learning Full Stack Developement and Communication skills. "}
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
export default Experience;
