import React from 'react';
import './Projects.css';

export const Projects = () => {

    const open = (http) => {
        window.open(http);
    }
    return (
        <div className="cnt-projects" id="cnt-projects">
            <div className="projects-content">
                <div className="projects-card">
                    <div className="card-img-sala" data-aos='zoom-in'>
                        <div className="project-card-hover">
                            <h1>SALA DE JUEGOS</h1>
                            <div className="project-card-hover-link">
                                <p className="glyphicon glyphicon-hand-down"></p>
                                <a onClick={() => open('https://sala-de-juegos-herrera.herokuapp.com/')}>Ingresa a la web</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="card-img-clinica" data-aos='zoom-in'>
                        <div className="project-card-hover">
                            <h1>CLINICA ONLINE</h1>
                            <div className="project-card-hover-link">
                                <p className="glyphicon glyphicon-hand-down"></p>
                                <a onClick={() => open('https://clinica-online-tp.herokuapp.com/')}>Ingresa a la web</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a className="github-repository" onClick={() => open('//github.com/MatiasNHerrera')}>MORE PROJECTS AND CODE</a>
            </div>
        </div>
    )
}
