import '../styles/About.css';
import React from 'react';
import profilePic from '../assets/imgs/profile.png';

function About() {
    return (
        <section className='about-section'>
            <div className='about-img'>
                <img src={profilePic} alt='Profile' />
            </div>
            <div className='about-info'>
                <h2>About Me</h2>
                <p>
                    I'm seeking an opportunity to apply my knowledge, especially in Full Stack projects. I have logical reasoning, proactivity, and adaptability, contributing innovative solutions. My goal is to grow professionally, adding value to the company and its projects.
                </p>
            </div>
            <div className='about-buttons'>
                <button>Hire Me</button>
                <button>Download CV</button>
            </div>
        </section>
    )
}

export default About;