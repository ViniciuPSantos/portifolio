import '../styles/Hero.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return(
        <section>
            <h2>I'm a</h2>
            <h1>Full Stack <br /> Software <br /> Developer</h1>
            <button className='hero-button'><Link to="/projects" className='link-botao'>View Projects</Link></button>
        </section>
    )
}

export default Hero;