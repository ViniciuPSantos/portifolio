import Hero from '../components/Hero';
import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/global.css';

function Home(){
    return(
        <div>
            <NavBar />
            <Hero />
        </div>
    )
}

export default Home;