import React from 'react'
import './Navbar.css'
import navLogo from '../../images/Logo.png'
import homeLogo from '../../images/home-icon.svg'
import gameLogo from '../../images/gamepedia-logo.svg'
import nftLogo from '../../images/nft-logo.svg'
import rocketLogo from '../../images/rocket-bold.png'

import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <motion.nav
            initial = {{ x:'-100%', opacity: 0 }}
            animate = {{ x: 0, opacity: 1 }}
            transition = {{ duration: 0.8 }}
        >
            <div className="nav__logo">
                <img src={navLogo} alt="nav-logo"></img>
            </div>
            <ul className="nav__menu">
                <a href="/"><li className="nav__list active"><img src={homeLogo} alt="" />Home</li></a>
                <a href="/"><li className="nav__list"><img src={gameLogo} alt="" />Gamepedia</li></a>
                <a href="/"><li className="nav__list"><img src={rocketLogo} alt="" />Launchpad</li></a>
                <a href="/"><li className="nav__list"><img src={nftLogo} alt="" />NFT Market</li></a>
            </ul>
        </motion.nav>
    )
}

export default Navbar