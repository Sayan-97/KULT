import React from 'react'
import './PopularCollections.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const PopularCollections = () => {

    const slides = [
        {
            imgSrc: {
                img1: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img2: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img3: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img4: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img5: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000'
            },
            avatar: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
            name: 'Creative Art Collection',
            createdBy: 'John Doe'
        },
        {
            imgSrc: {
                img1: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img2: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img3: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img4: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img5: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000'
            },
            avatar: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
            name: 'Creative Art Collection',
            createdBy: 'Mika Doe'
        },
        {
            imgSrc: {
                img1: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img2: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img3: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img4: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img5: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000'
            },
            avatar: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
            name: 'Creative Art Collection',
            createdBy: 'Mika Doe'
        },
        {
            imgSrc: {
                img1: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img2: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img3: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img4: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img5: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000'
            },
            avatar: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
            name: 'Creative Art Collection',
            createdBy: 'Mika Doe'
        },
        {
            imgSrc: {
                img1: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img2: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img3: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img4: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img5: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000'
            },
            avatar: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
            name: 'Creative Art Collection',
            createdBy: 'Mika Doe'
        },
        {
            imgSrc: {
                img1: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img2: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img3: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img4: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img5: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000'
            },
            avatar: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
            name: 'Creative Art Collection',
            createdBy: 'Mika Doe'
        },
        {
            imgSrc: {
                img1: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img2: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img3: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img4: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000',
                img5: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000'
            },
            avatar: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
            name: 'Creative Art Collection',
            createdBy: 'Mika Doe'
        },
    ]

    return (
        <section className="popCollection__section">
            <div className="popCollection__title">
                <h1>Popular Collections</h1>
                <div className='head__buttons'>
                    <div className="left__nav"><i className="uil uil-angle-left"></i></div>
                    <div className="right__nav"><i className="uil uil-angle-right"></i></div>
                </div>
            </div>

            <Swiper
                className="popCollection__container"
                slidesPerView={3}
                spaceBetween={40}
                grabCursor={true}
                modules={[Navigation]}
                navigation={{ prevEl: '.left__nav', nextEl: '.right__nav' }}
            >
                {slides.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="popCollection__content" >
                            <div className="grad__top"></div>
                            <div className="grad__left"></div>
                            <div className="grad__right"></div>
                            <div className="popCollection__images">
                                <div>
                                    <img src={item.imgSrc.img1} alt="img" />
                                    <img src={item.imgSrc.img1} alt="img" />
                                </div>
                                <div>
                                    <img src={item.imgSrc.img1} alt="img" />
                                    <img src={item.imgSrc.img1} alt="img" />
                                    <img src={item.imgSrc.img1} alt="img" />
                                </div>
                            </div>
                            <div className="popCollection__details">
                                <img src={item.avatar} alt="img" />
                                <div className="popCollection__detail">
                                    <h3>{item.name}</h3>
                                    <p>Created by <span>{item.createdBy}</span></p>
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

export default PopularCollections
