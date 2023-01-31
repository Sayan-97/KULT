import React from 'react'
import './Header.css'
import Mountains from '../../utils/Mountains/Mountains'
import Gradient from '../../utils/Gradient/Gradient'
import LinesBg from '../../utils/LinesBg/LinesBg'

const Header = () => {
    return (
        <>
            <header>
                
                <div className="header__container">

                    <h3>WELCOME TO KULT</h3>
                    <h1>The Future of <br />Gaming</h1>
                    <p>KULT is a dedicated gaming launchpad & IGO platform. We bring to you a platform projects <br />
                        can use to maximize their project's scope.</p>
                    <div className="header__buttons">
                        <button className="header__btn-primary">Discover</button>
                        <button className="header__btn-secondary">Watch Now</button>
                    </div>

                </div>

            </header>
            <Mountains />
            <Gradient />
            <LinesBg />
        </>
    )
}

export default Header