import React from 'react'

import '../styles/Projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Super from '../images/super.png';
import Crypto from '../images/crypto.png';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h2>My Projects</h2>
            <div className='projects__container'>
                <div className='project'>
                    <div className='project__imgs'>
                        <Link to='https://chasevriend.github.io/super-rental/' target='_blank'>
                            <img src={Super} alt='website' className='project__img' />
                        </Link>
                    </div>
                    <div className='project__content'>
                        <h4>Super Rental 🏎️</h4>
                        <p>
                            A website designed and developed for super-car rentals. This website 
                            provides an interface for searching and reserving cars.
                        </p>
                        <span className='proj__stack'>
                            <p className='lang'>React</p>
                            <p className='lang'>CSS</p>
                        </span>
                        <span className='proj__links'>
                            <Link to='https://chasevriend.github.io/super-rental/' target='_blank'>
                                Demo
                                <LaunchIcon className='proj__icon' />
                            </Link>
                            <Link to='https://github.com/chasevriend/super-rental' target='_blank'>
                                Code
                                <GitHubIcon className='proj__icon' />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className='project2'>
                    <div className='project__content'>
                        <h4>Crypto Casino 🪙</h4>
                        <p>
                            A website designed and developed for current crypto markets. This website 
                            provides an interface for searching different crypto currencies.
                        </p>
                        <span className='proj__stack'>
                            <p className='lang'>React</p>
                            <p className='lang'>Tailwind</p>
                            <p className='lang'>API</p>
                        </span>
                        <span className='proj__links'>
                            <Link to='https://chasevriend.github.io/Crypto-Casino/' target='_blank'>
                                Demo 
                                <LaunchIcon className='proj__icon' />
                            </Link>
                            <Link to='https://github.com/chasevriend/Crypto-Casino' target='_blank'>
                                Code
                                <GitHubIcon className='proj__icon' />
                            </Link>
                        </span>
                    </div>
                    <Link to='https://chasevriend.github.io/Crypto-Casino/' target='_blank'>
                        <img src={Crypto} alt='website' className='project__img' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects