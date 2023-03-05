import React from 'react'
import './Trending.css'

const Trending = () => {

    const items = [
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://nft-marketplace-gamma-nine.vercel.app/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F3.jpg&w=3840&q=100',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
    ]

    return (
        <section>
            <div className="trending__header">
                <h1>Trending</h1>
            </div>
            <div className="trending__container">

                {items.map((item) => {
                    return(
                        <div className='trending__content'>
                            <img src={item.imgSrc} alt="img" />
                            <div className="trending__content-details">
                                <h3>{item.name}</h3>
                                <div>
                                    <div><p>Floor Price</p><span>{item.fp}</span></div>
                                    <div><p>Total Volume</p><span>{item.tv}</span></div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Trending