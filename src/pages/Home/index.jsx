import React from "react";
import "./Home.css";


const Home = () => {

        return(
            <main>
            <nav className="nav">
                <div className="logo">
                    <img src="../public/img/icono-dm-blanco.svg" alt="logo" className="logo-blanco"/>
                </div>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>

            <section className="presentation">
                <div className="introduction">
                    <div className="intro-text">
                        <img src="../public/img/icono-logo-blanco.svg" alt="logo" className="logo-blanco"/>
                    </div>
                    <div className="cta">
                    </div>
                </div>
            </section>

            <section className="presentation-video">
                <video loop autoPlay muted>
                <source src="/public/img/STG_flash.mp4" type="video/mp4" />
                </video>

            </section>
            <section className="presentation1">

            </section>
            <section className="presentation">

            </section>

        </main>
            )
    }

export default Home;