import React from 'react'
import './TopSeller.css'
import { artist2 } from '../../../images'

const TopSeller = () => {

    const sellers = [
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
        {
            imgSrc: artist2,
            name: 'Daniel Sohail',
            id: '@danielsohail',
            vol: '121.5 ETH'
        },
    ]

    return (
        <section className="topSeller">

            <div className="topSeller__title">
                <h1>Top Seller</h1>
                <button className='secondary'>See All</button>
            </div>
            <div className='topSeller__container'>
                {sellers.map((item, index) => {
                    return (
                        <div className='topSeller__sellers'>
                            <img src={item.imgSrc} alt="img" />
                            <div className='tick-icon'><i className="uil uil-check"></i></div>
                            <div className="seller__details">
                                <h1>{item.name}</h1>
                                <a href='/'>{item.id}</a>
                                <h3>{item.vol}</h3>
                            </div>
                            <div className="seller__rank">#{index + 1}</div>
                            <button className='follow__button'>Follow</button>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default TopSeller
