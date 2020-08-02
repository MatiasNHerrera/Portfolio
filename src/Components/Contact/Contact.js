import React, { useState } from 'react';
import './Contact.css';
import whats from '../../Assets/whats.png';
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import mail from '../../Assets/email.png';

export const Contact = () => {

    const [form, setForm] = useState({

        name: '', 
        last_name: '', 
        email: '',
        query: ''
    });

    const { name, last_name,email, query } = form;

    const handleInputChange = ({target}) =>{
        setForm({
            ...form,
            [target.name] : target.value
        })
    }

    const open = (http) => {
        window.open(http);
    }

    return (
        <div className="cnt-contact" id="cnt-contact">
            <div className="cnt-contact-social">
                <form className="contact">

                    <div className="form-input">
                        <label>NOMBRE</label>
                        <input type="text" name="name" onChange={handleInputChange}/>
                    </div>

                    <div className="form-input">
                        <label>APELLIDO</label>
                        <input type="text" name="last_name" onChange={handleInputChange}/>
                    </div>

                    <div className="form-input">
                        <label>EMAIL</label>
                        <input type="text" name="email" onChange={handleInputChange}/>
                    </div>

                    <div className="form-input">
                        <label>CONSULTA</label>
                        <textarea name="query" onChange={handleInputChange}></textarea>
                    </div>

                </form>
                <div className="social">

                    <div>
                        <img src={github} onClick={() => open('//github.com/MatiasNHerrera')}/>
                        <span>MatiasNHerrera</span>
                    </div>
                        
                    <div>
                        <img src={linkedin} onClick={() => open('//www.linkedin.com/in/matias-herrera-018b9b195/')}/>
                        <span>Matias Herrera</span>
                    </div>

                    <div>
                        <img src={mail}/>
                        <span>HERRERANMATIAS@GMAIL.COM</span>
                    </div>

                    <div>
                        <img src={whats}/>
                        <span>1161912991</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
