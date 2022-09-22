import React from "react";
import Image from '../../asset/img.png'
import './home.css'

const Home = () => {
    return (
        <div className="homeCommon">
            <div className="home">
                <div className="MyName">
                    <div className="Text">
                        <span className="myNameIs">My name is Harutyun Tovmasyan</span>
                        <span className="myNameIs">I'm Front-End Developer</span>
                        <span className="myNameIs">
                              Effective communication skills- oral and written
                              An ability to learn new tasks and information quickly
                              An ability to help people work in a group
                              ability to relate to a variety of people of varying ages, backgrounds and cultures
                        </span>
                        <a href="Tovmasyan harutyun.docx" download="Tovmasyan harutyun.docx" className="downloadCv">Download Cv</a>
                    </div>

                </div>
                <div className="pictures">
                    <div className="image">
                        <img src={Image} alt="Harutyun" className="IMG"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
