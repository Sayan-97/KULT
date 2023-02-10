import React from 'react'
import './Navbar.css'
import navLogo from '../../images/Logo.png'
import homeLogo from '../../images/home-icon.svg'
import gameLogo from '../../images/gamepedia-logo.svg'
import nftLogo from '../../images/nft-logo.svg'
import rocketLogo from '../../images/rocket-bold.png'

const Navbar = () => {
    return (
        <nav>
            <div className="nav__logo">
                <img src={navLogo} alt="nav-logo"></img>
            </div>
            <ul className="nav__menu">
                <li className="nav__list active"><img src={homeLogo} alt="" /><a href="/">Home</a></li>
                <li className="nav__list"><img src={gameLogo} alt="" /><a href="/">Gamepedia</a></li>
                <li className="nav__list"><img src={rocketLogo} alt="" /><a href="/">Launchpad</a></li>
                <li className="nav__list"><img src={nftLogo} alt="" /><a href="/">NFT Market</a></li>
            </ul>
        </nav>
    )
}

export default Navbar