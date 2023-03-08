import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Button1 from './Button1';


const front = ["HTML5","CSS","JavaScript","React.js","Redux","React Native","Bootstrap","Telwind","MUI"]
const  back = ["Node.js","Express.js","Mongo DB","Redis","MySQL","Amazon EC2","Amazon S3","Microservices","Linux","TypeScript","Nginx","FCM","Zoho CRM","SQL","JSON Web Token (JWT)"]
const tech = ["VS Code","Postman","Github","MongoDB-Atlas","Jira","MySQL-Workbench"]
const soft = ["Team Player","Positive Attitude","Work Ethics","Creative"]
function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                       
                      <Button1 button={front} title = "FRONT-END"/>
                      <Button1 button={back} title = "BACK-END"/>
                      <Button1 button={tech} title = "TOOLS"/>
                      <Button1 button={soft} title = "SOFT-SKILLS"/>
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 1rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
