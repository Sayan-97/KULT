import React from 'react'
import { JoinKultImg1, JoinKultImg2, JoinKultImg3, JoinKultImg4 } from '../../../images'
import './JoinKult.css'

import {motion} from 'framer-motion'

const JoinKult = () => {
    return (
        <motion.section 
            initial={{ y: '20', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            // viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='joinKult__section'
        >
            <h1>How to Join Kult</h1>
            <p>Kult encourages users to read our comprehensive guide to enable themselves to launch their project with complete guidance and ease.</p>
            <div className="joinKult__steps">

                <div className="joinKult__step">
                    <img src={JoinKultImg1} />
                    <div className='step__grad'></div>
                    <h2>Purchase</h2>
                    <span>Purchase KULT Coin today and become the part of the biggest growing gaming platform.</span>
                </div>

                <div className="joinKult__step">
                    <img src={JoinKultImg2} />
                    <div className='step__grad'></div>
                    <h2>Launch</h2>
                    <span>Follow the steps mentioned in the guidelines and launch your project today and join the revolution with kult games. The Future</span>
                </div>

                <div className="joinKult__step">
                    <img src={JoinKultImg3} />
                    <div className='step__grad'></div>
                    <h2>Complete KYC</h2>
                    <span>In order to become an official member it is imperative that projects complete their KYC to help us get to know them better. <br />Complete KYC</span>
                </div>

                <div className="joinKult__step">
                    <img src={JoinKultImg4} />
                    <div className='step__grad'></div>
                    <h2>Share</h2>
                    <span>Once you have completed all the steps, share your profile with others and encourage them to follow you!</span>
                </div>
            </div>
        </motion.section>
    )
}

export default JoinKult