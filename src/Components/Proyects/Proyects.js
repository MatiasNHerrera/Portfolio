import React from 'react';
import './Proyects.css';

export const Proyects = () => {

    const open = (http) => {
        window.open(http);
    }
    return (
        <div className="cnt-proyects" id="cnt-proyects">
            <div className="proyects-content">
                <div className="proyects-card">
                    <div className="card-img-sala" data-aos='zoom-in'>
                        <div className="proyect-card-hover">
                            <h1>SALA DE JUEGOS</h1>
                            <div className="proyect-card-hover-link">
                                <p className="glyphicon glyphicon-hand-down"></p>
                                <a onClick={() => open('https://sala-de-juegos-herrera.herokuapp.com/')}>Ingresa a la web</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="proyects-card">
                    <div className="card-img-clinica" data-aos='zoom-in'>
                        <div className="proyect-card-hover">
                            <h1>CLINICA ONLINE</h1>
                            <div className="proyect-card-hover-link">
                                <p className="glyphicon glyphicon-hand-down"></p>
                                <a onClick={() => open('https://clinica-online-tp.herokuapp.com/')}>Ingresa a la web</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a className="github-repository" onClick={() => open('//github.com/MatiasNHerrera')}>MORE PROYECTS AND CODE</a>
            </div>
        </div>
    )
}
