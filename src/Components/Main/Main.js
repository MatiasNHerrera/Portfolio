import React, { useEffect } from 'react'
import { Header } from '../Header/Header';
import './Main.css';
import { Skills } from '../Skills/Skills';
import AOS from 'aos';
import { Proyects } from '../Proyects/Proyects';
import { Contact } from '../Contact/Contact';

export const Main = () => {

    const changeNavStyle = ({target}) => {

       if(target.scrollingElement.scrollTop > 40){
            document.querySelector('.cnt-navbar').classList.add('navbar-change');

            document.querySelectorAll('.line').forEach(el => {
                el.classList.add('line-change');
            })

            document.querySelectorAll('li').forEach(el => {
                el.classList.add('li-change');
                el.children[0].classList.add('a-change');
            })
        }
        else
        {
            document.querySelector('.cnt-navbar').classList.remove('navbar-change');

            document.querySelectorAll('.line').forEach(el => {
                el.classList.remove('line-change');
            })

            document.querySelectorAll('li').forEach(el => {
                el.classList.remove('li-change');
                el.children[0].classList.remove('a-change');
            })
        }
    }

    useEffect(() => {
        
        window.addEventListener('scroll', changeNavStyle, true);

        return () => {
            window.removeEventListener('scroll', changeNavStyle, true);
        }

    }, [])

    AOS.init({
        duration: 1000
    });

    return (
        <>
            <div className="main-cnt">
                <Header />
                <Skills />
                <Proyects />
                <Contact />
            </div>
        </>
    )
}
