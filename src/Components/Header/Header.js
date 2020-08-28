import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import './Header.css';
import pdf from '../../Assets/HerreraMatiasCV.pdf';

export const Header = () => {

    return (
        <>
            <div className="cnt-header" id="cnt-header">
                <div className="h-left">
                    <div data-aos="fade-right" className="dev-information">
                        <p>HERRERA <span>MATIAS</span> NICOLAS</p>
                        <div className="utn-text-info">
                            <p>Tecnico Universitario En Programacion</p>
                            <p>Universidad Tecnologica Nacional</p>
                        </div>
                        <div className="cv">
                            <p>DOWNLOAD CV</p>
                            <a href={pdf} download target="_blank" className="glyphicon glyphicon-save"></a>
                        </div>
                    </div>
                </div>
                <div className="h-right">

                </div>
            </div>
        </>
    )
}
