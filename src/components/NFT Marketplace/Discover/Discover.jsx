import React from 'react'
import './Discover.css'

const Discover = () => {

    const items = [
        {
            imgSrc: 'https://pbs.twimg.com/media/FpWdA2kagAUl-eo.jpg:large',
            name: 'Gratest Show',
            price: '0.25 ETH'
        },
        {
            imgSrc: 'https://th-i.thgim.com/public/incoming/ajusgf/article65584845.ece/alternates/FREE_1200/kimp_NFTVimalChandra.jpg',
            name: 'The Maze',
            price: '0.25 ETH'
        },
        {
            imgSrc: 'https://visionarymarketing.com/wp-content/uploads/2022/02/art-nfts-auction-2021-esther-barend.jpg.webp',
            name: 'Ping Pong Do',
            price: '0.25 ETH'
        },
        {
            imgSrc: 'https://www.ie.edu/insights/wp-content/uploads/2022/01/San-Jose-Feature.jpg',
            name: 'Parallex',
            price: '0.25 ETH'
        },
    ]

    return (
        <section>
            <div className='discover__header'>
                <h1>Discover</h1>
            </div>
            <div className="dicover__container">
                {items.map((item) => {
                    return(
                        <div className="discover__content">
                            <img src={item.imgSrc} alt="img" />
                            <div className='content-details'>
                                <h3>{item.name}</h3>
                                <p>Floor Price: <span>{item.price}</span></p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Discover