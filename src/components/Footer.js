import React from 'react'

import '../styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerBtn = () => {
        document
        .querySelector("#nav")
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='footer'>
            <div className='footer__container'>
                <h2 onClick={footerBtn}>Chase Vriend</h2>
                <div>
                    <Link to='https://www.linkedin.com/in/chase-vriend-308a61240/' target='_blank'>
                        <LinkedInIcon fontSize='large' className='footer__icon' />
                    </Link>
                    <Link to='https://github.com/chasevriend' target='_blank'>
                        <GitHubIcon fontSize='large' className='footer__icon' />
                    </Link>
                    <Link to='https://twitter.com/chasevriend' target='_blank'>
                        <TwitterIcon fontSize='large' className='footer__icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;