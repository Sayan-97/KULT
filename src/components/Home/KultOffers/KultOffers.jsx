import React from 'react'
import './KultOffers.css'

import { motion } from 'framer-motion'

import { NFTMarketLogo, GamepediaLogo, LaunchpadLogo } from '../../../images/index'

const KultOffers = () => {
    return (
        <motion.section 
            className='offer__section'

            initial={{ y: '20', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            // viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h1>Kult Offers</h1>
            <div className="offer__container">

                <div className="offer__card">
                    <img src={GamepediaLogo} alt="" />
                    <div className='card__gradient'></div>
                    <div className='card__content'>
                        <h3>Gamepedia</h3>
                        <p>A comprehensive, curated and community-driven Web3 gaming directory positioned as the main traffic source</p>
                    </div>
                </div>

                <div className="offer__card">
                    <img src={LaunchpadLogo} alt="" />
                    <div className='card__gradient'></div>
                    <div className='card__content'>
                        <h3>Launchpad</h3>
                        <p>Working as a tierless and permissionless launchpad, breaks the barriers of entry to provide equal pool weight for all contributors</p>
                    </div>
                </div>

                <div className="offer__card">
                    <img src={NFTMarketLogo} alt="" />
                    <div className='card__gradient'></div>
                    <div className='card__content'>
                        <h3>NFT Marketplace</h3>
                        <p>Fastest NFT Marketplace Connect, Create & Publish The supply & exchange ground for gamers. To the point NFT sales & rentals</p>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}

export default KultOffers