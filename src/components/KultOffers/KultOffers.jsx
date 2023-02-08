import React from 'react'
import './KultOffers.css'
import gamepedia from '../../images/gamepedia.png'
import launchpad from '../../images/launchpad.png'
import nftmarket from '../../images/nft_marketplace.png'

const KultOffers = () => {
    return (
        <section className='offer__section'>
            <h1>Kult Offers</h1>
            <div className="offer__container">

                <div className="offer__card">
                    <img src={gamepedia} alt="" />
                    <div className='card__gradient'></div>
                    <div className='card__content'>
                        <h3>Gamepedia</h3>
                        <p>A comprehensive, curated and community-driven Web3 gaming directory positioned as the main traffic source</p>
                    </div>
                </div>

                <div className="offer__card">
                    <img src={launchpad} alt="" />
                    <div className='card__gradient'></div>
                    <div className='card__content'>
                        <h3>Launchpad</h3>
                        <p>Working as a tierless and permissionless launchpad, breaks the barriers of entry to provide equal pool weight for all contributors</p>
                    </div>
                </div>

                <div className="offer__card">
                    <img src={nftmarket} alt="" />
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

export default KultOffers