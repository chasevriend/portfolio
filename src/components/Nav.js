import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }

    const portfolioBtn = () => {
        document
        .querySelector("#projects")
        .scrollIntoView({ behavior: "smooth" });
    };
    
    const openProjects = () => {
        openNav();
        portfolioBtn();
    }

    return(
        <section id="nav">
            <nav>
                <div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="mobile-nav__close">
                        <p className="mobile-nav__XBtn">X</p>
                    </div>
                    <ul className="mobile-nav__links">
                        <li>
                            <Link onClick={openNav} to="/">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openProjects} to="/">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="mailto: chasevriend84@gmail.com">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <span className="mobile__icons">
                        <Link onClick={openNav} to='https://www.linkedin.com/in/chase-vriend-308a61240/' target='_blank'>
                            <LinkedInIcon fontSize="large" className="mobile-nav__icon" />
                        </Link>
                        <Link onClick={openNav} to='https://github.com/chasevriend' target='_blank'>
                            <GitHubIcon fontSize="large" className="mobile-nav__icon" />
                        </Link>
                        <Link onClick={openNav} to='https://twitter.com/chasevriend' target='_blank'>
                            <TwitterIcon fontSize="large" className="mobile-nav__icon" />
                        </Link>
                    </span>
                </div>

                <div className="nav">
                    <div className="nav__left">
                        <Link 
                            className="nav__logo" 
                            to="/" onClick={() => window.scrollTo(0, 0)}
                        >
                            Chase Vriend
                        </Link>
                    </div>
                    <div className="nav__links">
                        <Link 
                            className="nav__link" 
                            to="/" onClick={() => window.scrollTo(0, 0)}
                        >
                            About
                        </Link>
                        <Link 
                            className="nav__link" 
                            to="/" onClick={portfolioBtn}
                        >
                            Projects
                        </Link>
                        <Link className="nav__btn" to='mailto: chasevriend84@gmail.com'>
                                Contact
                        </Link>
                    </div>

                    <div className="mobile-nav__hamburger" onClick={openNav}>
                        <svg viewBox="0 0 100 80" width="40" height="40" className="mobile-nav__hamburgerIcon">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Nav;