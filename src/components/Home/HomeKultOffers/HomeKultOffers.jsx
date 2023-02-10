import React from 'react'
import './HomeKultOffers.css'

import { NFTMarketLogo, GamepediaLogo, LaunchpadLogo } from '../../../images/index'

const HomeKultOffers = () => {
    return (
        <section className='offer__section'>
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
        </section>
    )
}

export default HomeKultOffers