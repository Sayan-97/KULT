import React, { useState } from 'react'

import './NFTMarketplace.css'

import { NFTCardImg1, NFTCardImg2, NFTCardImg3, NFTCardImg4, NFTCardImg5, NFTCardImg6 } from '../../../images'

import { Person1, Person2, Person3 } from '../../../images'

import { NFTLogo } from '../../../images'

import { motion } from 'framer-motion'

const NFTMarketplace = () => {

    const [ActiveFilter, setActiveFilter] = useState('Exclusive')

    const cardHolder = () => {
        if (ActiveFilter === 'Exclusive') {
            return (
                <>
                    <div className="nft__card">
                        <img src={NFTCardImg1} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg2} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />

                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg3} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg4} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg5} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg6} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />

                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>
                </>
            )
        } else if (ActiveFilter === 'Random') {
            return (
                <>
                    <div className="nft__card">
                        <img src={NFTCardImg3} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg4} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg5} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg6} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />

                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>
                </>
            )
        } else if ( ActiveFilter === 'Sci-Fi' ) {
            return (
                <>
                    <div className="nft__card">
                        <img src={NFTCardImg2} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />

                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg3} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg4} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg5} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="nft__card">
                        <img src={NFTCardImg3} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg4} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>

                    <div className="nft__card">
                        <img src={NFTCardImg5} alt="cardImg" />
                        <div className="nftcard__content">
                            <h3>Stoned</h3>
                            <div className="card__owner">
                                <img src={Person1} alt="" />
                                <img src={Person2} alt="" />
                                <img src={Person3} alt="" />
                                <span>Multiple Owners</span>
                            </div>
                            <span>Auction Time</span>
                            <span className='auction__time'>3h 1m 50s</span>
                            <div className='price'><img src={NFTLogo} alt="nftLogo" /><span>0.13 ETH</span></div>
                            <div className="g_top"></div>
                            <div className="g_bottom"></div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <motion.section
            initial={{ y: '10', opacity: 0 }}
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
                {['Exclusive', 'Random', 'Sci-Fi', 'Retrowave'].map((item) => {
                    return <li className={`nft__list ${ActiveFilter === item ? 'list-active' : ''}`} onClick={() => setActiveFilter(item)}>{item}</li>
                })}
            </ul>
            <div className="nft__cardholder">
                {cardHolder()}
            </div>
            <motion.button initial={{ background: "var(--btn-grad)" }}>View More</motion.button>
        </motion.section>
    )
}

export default NFTMarketplace