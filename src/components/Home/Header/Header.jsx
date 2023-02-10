import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <section className='section__home'>
            <button className='connect-btn'>Conect Wallet</button>
            <div className="home__container">
                <h3>WELCOME TO KULT</h3>
                <h1>The Future of Gaming</h1>
                <p>KULT is a dedicated gaming launchpad & IGO platform. We bring to you a platform projects can use to maximize their project's scope.</p>
                <div className="home__buttons">
                    <button className="home__btn-primary">Discover</button>
                    <button className="home__btn-secondary">Watch Now</button>
                </div>
            </div>
        </section>
    )
}

export default Header