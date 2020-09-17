import React, { useState } from 'react';
import './Contact.css';
import whats from '../../Assets/whats.png';
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import mail from '../../Assets/email.png';
import * as emailjs from 'emailjs-com';

export const Contact = () => {

    const [form, setForm] = useState({
        name: '', 
        last_name: '', 
        email: '',
        query: '',
        message: ''
    });

    const { name, last_name,email, query, message } = form;

    const handleInputChange = ({target}) =>{
        setForm({
            ...form,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) => {

        const message = document.getElementById('message-info');
        e.preventDefault();

        if(validarCampos()){
            sendEmail();
            vaciarForm();
            message.style.background = 'rgba(15, 180, 15, 0.7)';
            message.innerHTML = 'Mensaje enviado correctamente';
            message.style.display = 'flex';
        }
        else
        {
            message.style.background = 'rgba(150, 22, 22,0.7)';
            message.innerHTML = 'Debes completar los campos';
            message.style.display = 'flex';
        }


        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }

    const sendEmail = () =>{

        const templateParams = {
            from_name: `${name} ${last_name}`,
            to_name: `${name} ${last_name} - ${email}`,
            message_html: query
        }

        emailjs.send('gmail', 'template_10lvkJVe', templateParams, 'user_Cok3i2eYZrXOsPRXLX6Iv').then((result) => {
            }, (error) => {
                console.log(error.text);
        });
    }

    const vaciarForm = () => {

        document.getElementById('form-contact').reset();

        setForm({
            name: '',
            last_name: '',
            email: '',
            message: ''
        })
    }

    const validarCampos = () => {

        let retorno = false;

        if(email != '' && last_name != '' && query != ''){
            retorno = true;
        }

        return retorno;
    }   

    const open = (http) => {
        window.open(http);
    }

    return (
        <div className="cnt-contact" id="cnt-contact">
            <div className="message-info" id="message-info">{message}</div>
            <div className="cnt-contact-social" data-aos="fade-up">
                <form id="form-contact" className="contact" onSubmit={handleSubmit}>

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
                    
                    <input type="submit" />
                    <input type="reset" hidden/>

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
                        <img src={whats} onClick={() => open('https://api.whatsapp.com/send?phone=1161912991&text=&source=&data=&app_absent=')} />
                        <span>1161912991</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
