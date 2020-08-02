import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import './Header.css';

export const Header = () => {

    const openCv = () => {
        window.open('https://filetools3.pdf24.org/client.php?mode=inline&file=joinPdf_3bdc6e850dc29d779df38551e80db7f8_13987367736377580410.pdf&action=getFile');
    }

    return (
        <>
            <Navbar />
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
                            <span href="#" className="glyphicon glyphicon-save" onClick={openCv}></span>
                        </div>
                    </div>
                </div>
                <div className="h-right">

                </div>
            </div>
        </>
    )
}
