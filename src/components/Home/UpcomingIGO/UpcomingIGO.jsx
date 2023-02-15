import React from 'react'
import './UpcomingIGO.css'

import { motion } from 'framer-motion'

import { GamePic1, GamePic2, GamePic3, GamePic4, GamePic5, GamePic6 } from '../../../images'

const UpcomingIGO = () => {
    return (
        <motion.section
            initial={{ y: '20', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            // viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='IGO__section'
        >

            <h1>Upcoming IGO's</h1>
            <p className='IGO__desc'>Easy to join IGOs designed to bring ease for all users. Stay connected and subscribe to stay up-to-date with our IGOs and upcoming projects.</p>

            <div className="IGO__cardholder">

                <div className='IGO__card'>
                    <img src={GamePic1} alt="game-pic1" />
                    <div className="card__details">
                        <h3>The legends of Elysium</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={GamePic2} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Chain of Alliance</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={GamePic3} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Whisper of Soul</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={GamePic4} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Rage Effect</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={GamePic5} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Occupy Wallstreet</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={GamePic6} alt="game-pic1" />
                    <div className="card__details">
                        <h3>The legends of Elysium</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

            </div>
            <motion.button initial={{ background: "var(--btn-grad)" }}>View More</motion.button>
        </motion.section>
    )
}

export default UpcomingIGO