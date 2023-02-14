import React from 'react'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
    return (
        <>
            <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{ duration: 1 }}
                className='header__section'
            >
                <div className='home__container'>
                    <div className='gradient-1'></div>
                    <div className='gradient-2'></div>
                    <h3>WELCOME TO KULT</h3>
                    <h1>The Future of <br />Gaming</h1>
                    <p>KULT is a dedicated gaming launchpad & IGO platform. We bring to you a <br />platform projects can use to maximize their project's scope.</p>
                    <div className="home__buttons">
                        <button>Discover</button>
                        <button className="secondary">Watch Now</button>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Header