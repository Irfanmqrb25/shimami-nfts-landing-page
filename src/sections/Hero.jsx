import React from 'react';
import "../styles/Hero.css"
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import MilkyWay from '../assets/milky-way.svg'

const Hero = () => {
    return (
        <section className='container'>
            <div className='bg-custom-hero container flex flex-col px-20 py-6'>
                <Navbar />
                <Heading />
            </div>
            <img src={MilkyWay} className="bg-custom" alt="Milky Way" />
        </section>
    );
}

export default Hero;
