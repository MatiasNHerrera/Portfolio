import React from 'react'
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav data-aos="zoom-in" className="cnt-navbar">
            <ul>
                <li>
                    <a href="/#cnt-header">About Me</a>
                    <div className="line"></div>
                </li>
                <li>
                    <a href="/#cnt-skills">Skills</a>
                    <div className="line"></div>
                </li>
                <li>
                    <a href="/#cnt-projects">Projects</a>
                    <div className="line"></div>
                </li>
                <li>
                    <a href="/#cnt-contact">Contact</a>
                    <div className="line"></div>
                </li>
            </ul>
        </nav>
    )
}
