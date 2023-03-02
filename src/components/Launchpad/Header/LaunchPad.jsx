import React from 'react'
import { NFTLogo } from '../../../images'
import './Launchpad.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Launchpad = () => {

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
    <section className='trending__section'>

      <div className="trending__title">
        <h1>Trending NFT's</h1>
        <div className='head__buttons'>
          <div className="left__nav"><i className="uil uil-angle-left"></i></div>
          <div className="right__nav"><i className="uil uil-angle-right"></i></div>
        </div>
      </div>

      <Swiper
        className="launchpad__container"
        slidesPerView={5}
        spaceBetween={40}
        grabCursor={true}
        modules={[Navigation]}
        navigation={{ prevEl: '.left__nav', nextEl: '.right__nav' }}

      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="trending__content" >
              <img src={slide.imgSrc} alt="" />
              <div className="trending__details">
                <div className="g_top"></div>
                <div className="g_bottom"></div>
                <h3>{slide.name}</h3>
                <div className="trending__value">
                  <div className='trending__fp'><span>Floor Price</span><p>{slide.floorPrice}</p></div>
                  <div className='trending__tv'><span>Total Volume</span><p><img src={NFTLogo} alt="logo" />{slide.totalVol}</p></div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <button className='secondary'>View More</button>

    </section>
  )
}

export default Launchpad
