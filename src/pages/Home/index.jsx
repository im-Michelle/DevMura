import React from "react";
import "./Home.css";


const Home = () => {

        return(
            <main>
            

            <section className="presentation">
                <div className="introduction">
                    <div className="intro-text">
                        <img src="/docs/img/icono-logo-blanco.svg" alt="logo" className="logo-blanco"/>
                    </div>
                    <div className="cta">
                    </div>
                </div>
            </section>

            <section className="presentation-video">
                <video loop autoPlay muted>
                <source src="/docs/img/STG_flash.mp4" type="video/mp4" />
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