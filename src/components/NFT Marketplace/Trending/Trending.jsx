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
            imgSrc: 'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square.jpg',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/05/merlin_184196631_939fb22d-b909-4205-99d9-b464fb961d32-superJumbo.jpeg?auto=format&q=60&fit=max&w=930',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_1200/Dhanya-Ajith2021Artontwitter',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3r18F5o8mY34-bin2HvpTuNGwo_D3gcdd3g&usqp=CAU',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://cdn.decrypt.co/wp-content/uploads/2022/11/bored-ape-nft-232-gID_4.png',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://static.designboom.com/wp-content/uploads/2022/05/strozzi-nft-db-500.jpg',
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
            imgSrc: 'https://visionarymarketing.com/wp-content/uploads/2022/02/art-nfts-auction-2021-esther-barend.jpg.webp',
            name: 'Heaven Platform',
            fp: '0.27 ETH',
            tv: '0.13 ETH'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
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