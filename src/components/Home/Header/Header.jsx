import React from 'react'
import { motion } from 'framer-motion'
import './Header.css'


const Header = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='header__section'
            >
                <div className='home__container'>
                    <div className='gradient-1'></div>
                    <div className='gradient-2'></div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >WELCOME TO KULT</motion.h3>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >The Future of <br />Gaming</motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >KULT is a dedicated gaming launchpad & IGO platform. We bring to you a <br />platform projects can use to maximize their project's scope.</motion.p>
                    <div className="home__buttons">
                        <motion.button 
                            initial={{ background: "var(--btn-grad)", opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >Discover</motion.button>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="secondary"
                        >Watch Now</motion.button>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Header