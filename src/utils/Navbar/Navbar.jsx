import React from 'react'
import './Navbar.css'
import navLogo from '../../images/Logo.png'

import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <motion.nav
            initial = {{ y:-100, opacity: 0 }}
            animate = {{ y: 0, opacity: 1 }}
            transition = {{ duration: 1 }}
        >
            <img className='nav__logo' src={navLogo} alt="nav-logo"></img>
            <ul className="nav__menu">
                <li className='nav__list'><a href="/">Home</a></li>
                <li className='nav__list'><a href="/">Gamepedia</a></li>
                <li className='nav__list'><a href="/">Launchpad</a></li>
                <li className='nav__list'><a href="/">NFT Marketplace</a></li>
            </ul>
            <div className="nav__buttons">
                <button className='nav__button'>Create</button>
                <button className='nav__button-secondary'>Log In</button>
            </div>
        </motion.nav>
    )
}

export default Navbar