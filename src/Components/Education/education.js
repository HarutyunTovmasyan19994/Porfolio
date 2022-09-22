import React from "react";
import "./education.css"

const Education = () => {
    return (
        <div className="educationCommon">
            <div className="Edu">
                <span className="educationText">Education</span>
            </div>
            <div className="education">
                <div className="lori">
                    <span className="month">September.2014 - June.2018</span>
                    <span className="collage">
                          Graduated from Lori Regional State Collage,
                          Maintenance of computer equipment and computer networks. I have qualification of technician
                    </span>
                </div>
                <div className="anau">
                    <span className="month">September.2018</span>
                    <span className="collage">
                          Armenian National Agrarian University,
                          Faculty of Food Technologies
                    </span>
                </div>
            </div>
            <div className="education">
                <div className="lori">
                    <span className="month">22.04-28.08.2019</span>
                    <span className="collage">
                          I took part in course of studies in the organization of WinPower and I master HTML, CSS, JavaScript, Boostrap4, SASS
                    </span>
                </div>
                <div className="anau">
                    <span className="month">23.02-23.06.2021</span>
                    <span className="collage">
                           I took part in course of studies in the organization of Basic It Center and I master HTML5, CSS3,JavaScript, React Js, Redux
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Education
