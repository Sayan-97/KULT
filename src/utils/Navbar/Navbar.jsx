import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

import { navLogo } from '../../images'

import { motion } from 'framer-motion'

const Navbar = () => {

    const [show, setShow] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarColor, setNavbarColor] = useState(false)

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar.offsetHeight;
        if (currentScrollPos > lastScrollTop && currentScrollPos > navbarHeight) {
            setShow(false);
        } else {
            setShow(true);
        }

        setLastScrollTop(currentScrollPos <= 0 ? 0 : currentScrollPos);

        if (currentScrollPos > navbarHeight) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }

        setLastScrollTop(currentScrollPos <= 0 ? 0 : currentScrollPos);
    };

    useEffect(() => {
        // Check navbar color on initial load
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar.offsetTop;
        if (window.pageYOffset > navbarHeight) {
            setNavbarColor(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: show ? 0 : -100, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className = {`navbar ${navbarColor ? 'scrolled' : ''}`}
        >
            <img className='nav__logo' src={navLogo} alt="nav-logo"></img>
            <ul className="nav__menu">
                <li className='nav__list'><Link to="/">Home</Link></li>
                <li className='nav__list'><Link to="/gamepedia">Gamepedia</Link></li>
                <li className='nav__list'><Link to="/launchpad">Launchpad</Link></li>
                <li className='nav__list'><Link to="/nftmarketplace">NFT Marketplace</Link></li>
            </ul>
            <div className="nav__buttons">
                <button className='nav__button'>Create</button>
                <button className='nav__button-secondary'>Log In</button>
            </div>
        </motion.nav>
    )
}

export default Navbar