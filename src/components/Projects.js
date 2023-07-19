import React from 'react'

import '../styles/Projects.css';

import Super from '../images/super.png';
import Crypto from '../images/crypto.png';

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

                    </div>
                </div>
                <div className='project'>
                    <div className='project__content'>

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