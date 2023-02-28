import React from 'react'
import './UpcomingIGO.css'

import { motion } from 'framer-motion'

import { UpcomingIGOData } from '../../../utils/constants'

const UpcomingIGO = () => {

    return (
        <motion.section
            initial={{ y: '10', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{ duration: 1 }}
        >

            <h1>Upcoming IGO's</h1>
            <p>Easy to join IGOs designed to bring ease for all users. Stay connected and subscribe to stay up-to-date with our IGOs and upcoming projects.</p>

            <div
                className="IGO__cardholder"
            >

                {UpcomingIGOData.map((item, index) => {
                    return (
                        <div key={index} className='IGO__card'>
                            <img src={item.image} alt="game-pic1" />
                            <div className="card__details">
                                <h3>{item.name}</h3>
                                <div className="card__countdown">
                                    <i className="uil uil-clock"></i>
                                    <p>{item.countDown}</p>
                                </div>
                                <div className="g_top"></div>
                                <div className="g_bottom"></div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <motion.button initial={{ background: "var(--btn-grad)" }}>View More</motion.button>
        </motion.section>
    )
}

export default UpcomingIGO