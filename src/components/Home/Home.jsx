import React from 'react'
import './Home.css'
import Mountains from '../../utils/Mountains/Mountains'
import Gradient from '../../utils/Gradient/Gradient'
import LinesBg from '../../utils/LinesBg/LinesBg'

const Home = () => {
    return (
        <>
            <section className='section__home'>
                <button className='connect-btn'>Conect Wallet</button>
                <header>
                    <div className="home__container">
                        <h3>WELCOME TO KULT</h3>
                        <h1>The Future of <br />Gaming</h1>
                        <p>KULT is a dedicated gaming launchpad & IGO platform. We bring to you a platform projects <br />
                            can use to maximize their project's scope.</p>
                        <div className="home__buttons">
                            <button className="home__btn-primary">Discover</button>
                            <button className="home__btn-secondary">Watch Now</button>
                        </div>
                    </div>

                </header>

            </section>

            <Gradient />

            <Mountains />

            <LinesBg />
        </>
    )
}

export default Home