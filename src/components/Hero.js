import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Hero.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeroImg from '../images/hero.png';

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero__content'>
                    <h1>Front-End Developer</h1> 
                    <p>
                        Hi, I'm Chase Vriend. I'm a passionate Front-End Developer 
                        based in Huntington Beach, CA. 🌊 ☀️
                    </p>
                    <Link to='/'>
                        <LinkedInIcon className='hero__icon' />
                    </Link>
                    <Link to='/'>
                        <GitHubIcon className='hero__icon' />
                    </Link>
                </div>
                <img src={HeroImg} alt='picture of Chase' className='hero__img' /> 
            </div>
        </>
    )
}

export default Hero