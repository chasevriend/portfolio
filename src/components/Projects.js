import React from 'react'

import '../styles/Projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Super from '../images/super.png';
import Crypto from '../images/crypto.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='projects'>
            <h2>Portfolio</h2>
            <div className='projects__container'>
                <div className='project'>
                    <div className='project__imgs'>
                        <img src={Super} alt='website' className='project__img' />
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
                            <Link to=''>
                                DEMO
                            </Link>
                            <Link to='https://github.com/chasevriend/super-rental' target='_blank'>
                                CODE
                                <FontAwesomeIcon icon="fa-brands fa-github" />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__content'>
                        <h4>Crypto Casino 🪙</h4>
                        <p>
                            A website designed and developed for super-car rentals. This website 
                            provides an interface for searching and reserving cars.
                        </p>
                        <span className='proj__stack'>
                            <p className='lang'>React</p>
                            <p className='lang'>CSS</p>
                        </span>
                        <span className='proj__links'>
                            <Link to=''>
                                Demo 
                                <LaunchIcon className='proj__icon' />
                            </Link>
                            <Link to='https://github.com/chasevriend/Crypto-Casino' target='_blank'>
                                Code
                                <GitHubIcon className='proj__icon' />
                            </Link>
                        </span>
                    </div>
                    <div className='project__imgs'>
                        <img src={Crypto} alt='website' className='project__img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects