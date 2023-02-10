import React from 'react'
import './HomeNFTMarketplace.css'
import cardImg1 from '../../images/nft-card-img1.png'
import cardImg2 from '../../images/nft-card-img2.png'
import cardImg3 from '../../images/nft-card-img3.png'
import cardImg4 from '../../images/nft-card-img4.png'
import cardImg5 from '../../images/nft-card-img5.png'
import cardImg6 from '../../images/nft-card-img6.png'

import personImg1 from '../../images/person1.jfif'
import personImg2 from '../../images/person2.jfif'
import personImg3 from '../../images/person3.jfif'
import nftLogo from '../../images/nft-logo.svg'

const HomeNFTMarketplace = () => {
    return (
        <section className='section__nftMarketplace'>
            <h1>Explore NFT Marketplace</h1>
            <p className='desc'>Now launch your NFT Collections with just 3 Clicks. Connect, Create, & Publish!</p>
            <div className="nft__cardholder">

                <div className="nft__card">
                    <div className="card__img">
                        <img src={cardImg1} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={personImg1} alt="img" />
                            <img src={personImg2} alt="img" />
                            <img src={personImg3} alt="img" />
                            <span>Multiple Owners</span>
                        </div>
                        <span>Auction Time</span>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={nftLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={cardImg2} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={personImg1} alt="img" />

                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={nftLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={cardImg3} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={personImg1} alt="img" />
                            <img src={personImg2} alt="img" />
                            <img src={personImg3} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={nftLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={cardImg4} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={personImg1} alt="img" />
                            <img src={personImg2} alt="img" />
                            <img src={personImg3} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={nftLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={cardImg5} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={personImg1} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={nftLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className="nft__card">
                    <div className="card__img">
                        <img src={cardImg6} alt="cardImg" />
                    </div>
                    <div className="nftcard__content">
                        <h2>Stoned</h2>
                        <div className="card__owner">
                            <img src={personImg1} alt="img" />
                            <img src={personImg2} alt="img" />
                            <img src={personImg3} alt="img" />
                            <p>Multiple Owners</p>
                        </div>
                        <p>Auction Time</p>
                        <span className='auction__time'>3h 1m 50s</span>
                        <span className='price'><img src={nftLogo} alt="nftLogo" /> 0.13 ETH</span>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeNFTMarketplace