import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Hero.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import HeroImg from '../images/hero.png';

const Hero = () => {
    return (
        <>
            <div className='hero' id='hero'>
                <div className='hero__content'>
                    <h1>Hi I'm Chase <span className='hero__wave'>👋</span></h1> 
                    <p>
                        I'm a passionate Front-End Developer based in Huntington Beach, CA.
                        I excel in design and development of responsive websites that offer a seamless 
                        user experience. 
                    </p>
                    <Link to='mailto: chasevriend84@gmail.com' target='_blank'>
                        <EmailIcon fontSize='large' className='hero__icon' />
                    </Link>
                    <Link to='https://www.linkedin.com/in/chase-vriend-308a61240/' target='_blank'>
                        <LinkedInIcon fontSize='large' className='hero__icon2' />
                    </Link>
                    <Link to='https://github.com/chasevriend' target='_blank'>
                        <GitHubIcon fontSize='large' className='hero__icon2' />
                    </Link>
                    <Link to='https://twitter.com/chasevriend' target='_blank'>
                        <TwitterIcon fontSize='large' className='hero__icon2' />
                    </Link>

                </div>
                <img src={HeroImg} alt='picture of Chase' className='hero__img' /> 
            </div>
        </>
    )
}

export default Hero