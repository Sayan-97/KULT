import React from 'react'
import './NotableCollections.css'

const NotableCollections = () => {

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
    ]

    return (
        <section>
            <div className="notableCollections__header">
                <h1>Notable Collections</h1>
            </div>
            <div className="notableCollections__container">

                {items.map((item) => {
                    return (
                        <div className="notableCollections__content">
                            <img src={item.imgSrc} alt="img" />
                            <div className="notableCollections__content-details">
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

export default NotableCollections