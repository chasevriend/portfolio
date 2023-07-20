import React from 'react'
import '../styles/Hero.css'

import Html from '../images/html.png';
import Css from '../images/css.png';
import Ts from '../images/ts.png'
import ReactImg from '../images/react.png';
import Tailwind from '../images/tailwind.png';
import Sass from '../images/sass.png'


const Stack = () => {
    return (
        <div className='stack'>
            <h2>Tech Stack</h2>
            <div className='stack__container'>
                <img src={Html} className='stack__lang' alt='tech lang' />
                <img src={Css} className='stack__lang' alt='tech lang' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' className='stack__lang2' alt='tech lang' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' className='stack__lang2' alt='tech lang' />
                <img src={ReactImg} className='stack__lang' alt='tech lang' />
                <img src={Ts} className='stack__lang2' alt='tech lang' />
                <img src={Tailwind} className='stack__lang' alt='tech lang' />
                <img src={Sass} className='stack__lang' alt='tech lang' />
            </div>
        </div>
    )
}

export default Stack