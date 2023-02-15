import React from 'react'
import './NFTMarketplace.css'

import { NFTCardImg1, NFTCardImg2, NFTCardImg3, NFTCardImg4, NFTCardImg5, NFTCardImg6 } from '../../../images'

import { Person1, Person2, Person3 } from '../../../images'

import { NFTLogo } from '../../../images'

import { motion } from 'framer-motion'

const NFTMarketplace = () => {
    return (
        <motion.section
            initial={{ y: '20', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{ duration: 1 }}
            className='section__nftMarketplace'
        >
            <div className='gradient-3'></div>
            <div className='gradient-4'></div>
            <div className='gradient-5'></div>
            <h1>Explore NFT Marketplace</h1>
            <p className='desc'>Now launch your NFT Collections with just 3 Clicks. Connect, Create, & Publish!</p>
            <ul className="nft__nav">
                <li className='nft__list list-active'>Exclusive</li>
                <li className='nft__list'>Random</li>
                <li className='nft__list'>Sci-Fi</li>
                <li className='nft__list'>Retrowave</li>
            </ul>
            <div className="nft__cardholder">

                <div className="nft__card">
                    <div className="card__img">
                        <img src={NFTCardImg1} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={Person1} alt="img" />
                            <img src={Person2} alt="img" />
                            <img src={Person3} alt="img" />
                            <span>Multiple Owners</span>
                        </div>
                        <span>Auction Time</span>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={NFTLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={NFTCardImg2} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={Person1} alt="img" />

                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={NFTLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={NFTCardImg3} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={Person1} alt="img" />
                            <img src={Person2} alt="img" />
                            <img src={Person3} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={NFTLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={NFTCardImg4} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={Person1} alt="img" />
                            <img src={Person2} alt="img" />
                            <img src={Person3} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={NFTLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={NFTCardImg5} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={Person1} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={NFTLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={NFTCardImg6} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={Person1} alt="img" />
                            <img src={Person2} alt="img" />
                            <img src={Person3} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={NFTLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

            </div>
            <motion.button initial={{ background: "var(--btn-grad)" }}>View More</motion.button>
        </motion.section>
    )
}

export default NFTMarketplace