import React from 'react'

import '../styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <h2>Chase Vriend</h2>
                <div>
                    <Link to=''>
                        <EmailIcon fontSize='large' className='footer__icon' />
                    </Link>
                    <Link to=''>
                        <LinkedInIcon fontSize='large' className='footer__icon' />
                    </Link>
                    <Link to='/'>
                        <GitHubIcon fontSize='large' className='footer__icon' />
                    </Link>
                    <Link to=''>
                        <TwitterIcon fontSize='large' className='footer__icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;