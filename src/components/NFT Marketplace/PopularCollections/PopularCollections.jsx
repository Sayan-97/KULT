import React, {useRef} from 'react'
import './PopularCollections.css'

const PopularCollections = () => {

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
                    <div onClick={handleScrollLeft} className="left__nav"><i className="uil uil-angle-left"></i></div>
                    <div onClick={handleScrollRight} className="right__nav"><i className="uil uil-angle-right"></i></div>
                </div>
            </div>

            <div className="popCollection__container" ref={containerRef}>
                {slides.map((item, index) => {
                    return (
                        <div key={index} className="popCollection__content" >
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
                        </div>
                    )
                })}
            </div>

            <button className='secondary'>View More</button>
        </section>
    )
}

export default PopularCollections
