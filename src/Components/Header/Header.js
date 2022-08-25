import React from 'react'
import {NavLink} from "react-router-dom"
import './Header.css'

const Header = () =>{
    return(
        <div className="Header">
            <div className="name">
                <span>
                    <NavLink to="/">
                       Harutyun Tovmasyan
                    </NavLink>
                </span>
            </div>
            <div className="nav">
                <ul className="ul">
                    <li className="li">
                        <NavLink to="/" className="activeLink">
                            Home
                        </NavLink>

                    </li>
                    <li className="li" >
                        <NavLink to="/about" className="activeLink">
                            About
                        </NavLink>

                    </li>
                    <li className="li">
                        <NavLink to="/myWork" className="activeLink">
                            My Work
                        </NavLink>

                    </li>
                    <li className="li">
                        <NavLink to="/contact" className="activeLink">
                            Contact
                        </NavLink>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
