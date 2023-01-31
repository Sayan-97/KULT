import React from 'react'
import './Navbar.css'
import navLogo from '../../images/logo 1.png'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav__container">
                    <img src={navLogo} alt="nav-logo"></img>
                        <ul className="nav__menu">
                            <li className="nav__list"><a href="/">Home</a></li>
                            <li className="nav__list"><a href="/">IGO</a></li>
                            <li className="nav__list"><a href="/">Games</a><i className="uil uil-angle-down"></i></li>
                            <li className="nav__list"><a href="/">NFT</a></li>
                            <li className="nav__list"><a href="/">Earn</a></li>
                            <li className="nav__list"><a href="/">Insight</a></li>
                        </ul>
                        <button className="nav__btn">Connect Wallet</button>
                </div>
            </nav>
        </>

    )
}

export default Navbar