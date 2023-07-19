import React from 'react'
import '../styles/Contact.css';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__container'>
                <h2>Contact Me 👇</h2>
                <div className='contact__content'>
                    <div>
                        <PinDropIcon fontSize='large' className='contact__icon' />
                        <span>
                            <h4>Location</h4>
                            <p>Huntington Beach, CA</p>
                        </span>
                    </div>
                    <div>
                        <EmailIcon fontSize='large' className='contact__icon' />
                        <span>
                            <h4>Mail</h4>
                            <Link to='mailto: chasevriend84@gmail.com'>
                                <p>chasevriend84@gmail.com</p>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact