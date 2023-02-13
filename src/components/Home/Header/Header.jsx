import React from 'react'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
    return (
        <>
            <section className='header__section'>
                <button className='primary connect-btn'>Connect Wallet</button>
                    <motion.div
                        initial={{ y: '20', opacity: 0 }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        // viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="home__container"
                    >
                        <h3>WELCOME TO KULT</h3>
                        <h1>The Future of Gaming</h1>
                        <p>KULT is a dedicated gaming launchpad & IGO platform. We bring to you a platform projects can use to maximize their project's scope.</p>
                        <div className="home__buttons">
                            <button>Discover</button>
                            <button className="secondary">Watch Now</button>
                        </div>
                    </motion.div>
            </section>
        </>
    )
}

export default Header