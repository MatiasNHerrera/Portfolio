import React from 'react';
import './Skills.css';

//logos
import angular from '../../Assets/angular.png';
import typescript from '../../Assets/typescript.png';
import csharp from '../../Assets/csharp.png';
import javascript from '../../Assets/javascript.png';
import firebase from '../../Assets/firebase.png';
import html from '../../Assets/html.png';
import css from '../../Assets/css.png';
import php from '../../Assets/php.png';
import mysql from '../../Assets/mysql.png';

export const Skills = () => {

    return (
        <div className="cnt-skills" id="cnt-skills">
            <div className="skills-c-o">
                <h1>TECNOLOGIAS</h1>
                <div className="technologies">
                    <div className="pic-ctn">
                        <img className="pic" src={angular} alt="Logo" />
                        <img className="pic" src={typescript} alt="Logo" />
                        <img className="pic" src={javascript} alt="Logo" />
                        <img className="pic" src={html} alt="Logo" />
                        <img className="pic" src={css} alt="Logo" />
                        <img className="pic" src={php} alt="Logo" />
                        <img className="pic" src={csharp} alt="Logo" />
                        <img className="pic" src={firebase} alt="Logo" />
                        <img className="pic" src={mysql} alt="Logo" />
                    </div>
                </div>
            </div>
            <div className="skills-c-t">
                <h1>APTITUDES</h1>
                <div className="aptitudes">
                    <p data-aos="fade-right">»<span>P</span>ROACTIVIDAD</p>
                    <p data-aos="fade-left">»<span>P</span>UNTUALIDAD</p>
                    <p data-aos="fade-right">»<span>C</span>OMPROMISO</p>
                    <p data-aos="fade-left">»<span>A</span>UTODIDACTA</p>
                    <p data-aos="fade-right">»<span>R</span>ESPONSABLE</p>
                </div>
            </div>
        </div>
    )
}
