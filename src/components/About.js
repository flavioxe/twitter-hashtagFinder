import React from 'react';
import './About.css';
import {Link} from 'react-router-dom'
//import NavMenu from './NavManu.jsx';
//import Footer from './Footer.jsx';

//Icons
import svg from './imgs/about-illustration.svg';
import iconGit from './imgs/icon-github.svg';
import iconEnvelope from './imgs/icon-envelope.svg';
import iconLinkedin from './imgs/icon-linkedin.svg';
import logoWhite from './imgs/logo-white.svg';
import iconHome from './imgs/icon-home.svg';
import iconUser from './imgs/icon-user-alt.svg';

// Memebers photos
import fotoJu from './imgs/juliana.jpeg';
import fotoGio from './imgs/flavio.jpg';
import fotoFla from './imgs/giovani.jpeg';
import fotoMar from './imgs/eu.jpg';
import fotoLeo from './imgs/leo.jpg';

function About() {

    return (
        <div className="aboutWrapper">
            <div className="aboutHeader">
                <section className="header">
                    <div className="headerContent">
                        <div className="headerLogo">
                            <img src={logoWhite} className="logoWhite" alt="Logo hashtagfinder" />
                        </div>
                        <div className="headerButtons">
                            <Link to="/" className="linkRoute">    
                            <button className="aboutBtn"><img src={iconHome} alt="icone de busca" />home</button>
                            </Link>
                            <Link to="/login" className="linkRoute">
                            <button className="aboutBtnLogin"><img src={iconUser} alt="icone de usuário" />login</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <h1 className="aboutProject">Sobre o projeto</h1>
            </div>
            <div className="aboutText">
                <div className="aboutAside">
                    <h3>O que é</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <img src={svg} alt="Logo" className="aboutSvg" />
            </div>
            <h1 className="aboutWe">Quem somos nós</h1>
            <div className="wrapperPhoto">
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src={fotoLeo} alt="fotoLeo" />
                            </div>
                            <h2>Leonardo Galvez</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                                <img src={iconGit} alt="GitHub" className="iconGit" />
                                <img src={iconEnvelope} alt="e-mail" className="iconEnvelope" />
                                <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src={fotoMar} alt="fotoMarcelo" />
                            </div>
                            <h2>Marcelo Correa</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                                <img src={iconGit} alt="GitHub" className="iconGit" />
                                <img src={iconEnvelope} alt="e-mail" className="iconEnvelope" />
                                <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src={fotoJu} alt="fotoJuliana" />
                            </div>
                            <h2>Juliana Goia</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                                <img src={iconGit} alt="GitHub" className="iconGit" />
                                <img src={iconEnvelope} alt="e-mail" className="iconEnvelope" />
                                <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src={fotoFla} alt="fotoFlavio" />

                            </div>
                            <h2>Giovanni Shiroma</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                                <img src={iconGit} alt="GitHub" className="iconGit" />
                                <img src={iconEnvelope} alt="e-mail" className="iconEnvelope" />
                                <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src={fotoGio} alt="fotoGiovani" />

                            </div>
                            <h2>Flávio Silva</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                                <img src={iconGit} alt="GitHub" className="iconGit" />
                                <img src={iconEnvelope} alt="e-mail" className="iconEnvelope" />
                                <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                @NewTab Academy 2021. Todos os direitos reservados
            </footer>
        </div>

    )
}


export default About;

