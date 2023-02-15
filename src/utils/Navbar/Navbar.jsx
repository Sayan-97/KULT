import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

import { NewLogo } from '../../images'

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
            className={`navbar ${navbarColor ? 'scrolled' : ''}`}
        >
            <img className='nav__logo' src={NewLogo} alt="nav-logo"></img>
            <ul className="nav__menu">

                <motion.li
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Link className='nav__list' to="/">Home</Link>
                </motion.li>

                <motion.li
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Link className='nav__list' to="/gamepedia">Gamepedia</Link>
                </motion.li>

                <motion.li
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Link className='nav__list' to="/launchpad">Launchpad</Link>
                </motion.li>

                <motion.li
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Link className='nav__list' to="/nftmarketplace">NFT Marketplace</Link>
                </motion.li>

            </ul>
            <div className="nav__buttons">
                <motion.button
                    initial={{ background: "var(--btn-grad)" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className='nav__button'
                >
                    Create</motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    className='nav__button-secondary'
                >Log In</motion.button>
            </div>
        </motion.nav>
    )
}

export default Navbar