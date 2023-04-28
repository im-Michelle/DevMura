import React from "react";
import "./Home.css";


const Home = () => {

        return(
            <main>
            <nav className="nav">
                <div className="logo">
                    <h4>DevMura</h4>
                </div>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>

            <section className="presentation">
                <div className="introduction">
                    <div className="intro-text">
                        <h1>Desenvolvimento Web</h1>
                        <p>Desenvolvimento de sites e sistema.</p>
                    </div>
                    <div className="cta">
                        
                    </div>
                </div>
            </section>

            


        </main>
            )

    }

export default Home;