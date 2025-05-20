import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import fccresponsive from "../../img/fccresponsivecertificateyh.png";
import fccjs from "../../img/javascriptfcccertificate.png";
import udemyFullStack from "../../img/udemyfullstack.jpg";


export default function About({ innerRef }) {
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

function certificationsText() {
    return <>
        <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd certifications</p>
        <p><span style={{ color: info.baseColor }}>certifications <span className={Style.green}>(main)</span> $</span> ls</p>
        <ul className={Style.certifications}>
            <li>
                <img src={udemyFullStack} alt="Udemy Full Stack Certificate" className={Style.certificateImage} />
                <a href="https://www.udemy.com/certificate/your-certificate-link" target="_blank" rel="noopener noreferrer">
                    Full Stack Web Developer Certificate – Udemy
                </a>
            </li>
            <li>
                <img src={fccresponsive} alt="Responsive Web Design Certificate" className={Style.certificateImage} />
                <a href="https://www.freecodecamp.org/certification/fcc8de9c8e8-3cda-454f-aa2f-663208ed0bb3/responsive-web-design" target="_blank" rel="noopener noreferrer">
                    Responsive Web Design Certification
                </a>
            </li>
            <li>
                <img src={fccjs} alt="JavaScript and Data Structures Certificate" className={Style.certificateImage} />
                <a href="https://www.freecodecamp.org/certification/fcc8de9c8e8-3cda-454f-aa2f-663208ed0bb3/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">
                    JavaScript and Data Structures Certification
                </a>
            </li>
        </ul>
    </>;
}



    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={certificationsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}
