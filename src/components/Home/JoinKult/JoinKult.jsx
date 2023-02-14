import React from 'react'
import { JoinKultImg1, JoinKultImg2, JoinKultImg3, JoinKultImg4 } from '../../../images'
import './JoinKult.css'

const JoinKult = () => {
    return (
        <section className='joinKult__section'>
            <h1>How to Join Kult</h1>
            <p>Kult encourages users to read our comprehensive guide to enable themselves to launch their project with complete guidance and ease.</p>
            <div className="joinKult__steps">

                <div className="joinKult__step">
                    <img src={JoinKultImg1} />
                    <div className='step__grad'></div>
                    <h3>Purchase</h3>
                    <span>Purchase KULT Coin today and become the part of the biggest growing gaming platform.</span>
                </div>

                <div className="joinKult__step">
                    <img src={JoinKultImg2} />
                    <div className='step__grad'></div>
                    <h3>Launch</h3>
                    <span>Follow the steps mentioned in the guidelines and launch your project today and join the revolution with kult games. The Future</span>
                </div>

                <div className="joinKult__step">
                    <img src={JoinKultImg3} />
                    <div className='step__grad'></div>
                    <h3>Complete KYC</h3>
                    <span>In order to become an official member it is imperative that projects complete their KYC to help us get to know them better. <br />Complete KYC</span>
                </div>

                <div className="joinKult__step">
                    <img src={JoinKultImg4} />
                    <div className='step__grad'></div>
                    <h3>Share</h3>
                    <span>Once you have completed all the steps, share your profile with others and encourage them to follow you!</span>
                </div>
            </div>
        </section>
    )
}

export default JoinKult