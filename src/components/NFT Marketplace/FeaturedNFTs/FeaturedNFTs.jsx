import React, {useRef} from 'react'
import './FeaturedNFTs.css'
import { NFTLogo } from '../../../images';

const FeaturedNFTs = () => {

    const containerRef = useRef(null);

    // For the Scroll Buttons
    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 400;
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 400;
        }
    };

    const slides = [
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            floorPrice: '0.27 ETH',
            totalVol: '0.13 ETH'
        },
    ]

    return (
        <section className="featuredNFTs__section">
            <div className="featuredNFTs__title">
                <h1>Featured NFT's</h1>
                <div className='head__buttons'>
                    <div onClick={handleScrollLeft} className="left__nav"><i className="uil uil-angle-left"></i></div>
                    <div onClick={handleScrollRight} className="right__nav"><i className="uil uil-angle-right"></i></div>
                </div>
            </div>

            <div className="featuredNFTs__container" ref={containerRef}>
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className="featuredNFTs__content" >
                            <img src={slide.imgSrc} alt="" />
                            <div className="featuredNFTs__details">
                                <div className="g_top"></div>
                                <div className="g_bottom"></div>
                                <h3>{slide.name}</h3>
                                <div className="featuredNFTs__value">
                                    <div className='featuredNFTs__fp'><span>Floor Price</span><p>{slide.floorPrice}</p></div>
                                    <div className='featuredNFTs__tv'><span>Total Volume</span><p><img src={NFTLogo} alt="logo" />{slide.totalVol}</p></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button className='secondary'>View More</button>

        </section>
    )
}

export default FeaturedNFTs
