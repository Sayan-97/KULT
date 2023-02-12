import React from 'react'

import './TopArtist.css'

import { artist1, artistImg1, artistImg2, artistImg3, artistImg4 } from '../../../images'

const TopArtist = () => {
    return (
        <section className='artist__section'>
            <h1>Top Live Artist</h1>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>

            <div className="artist__cardholder">

                <div className="artist__card">
                    <img src={artistImg1} alt="artistImg" className='artist__img' />
                    {/* <img src={artist1} alt="artist" /> */}
                    <div className='artist__detail'>
                        <h3>John Doe #47</h3>
                    </div>
                </div>

                <div className="artist__card">
                    <img src={artistImg2} alt="artistImg" className='artist__img' />
                    {/* <img src={artist1} alt="artist" /> */}
                    <div className='artist__detail'>
                        <h3>John Doe #47</h3>
                    </div>
                </div>

                <div className="artist__card">
                    <img src={artistImg3} alt="artistImg" className='artist__img' />
                    {/* <img src={artist1} alt="artist" /> */}
                    <div className='artist__detail'>
                        <h3>John Doe #47</h3>
                    </div>
                </div>

                <div className="artist__card">
                    <img src={artistImg4} alt="artistImg" className='artist__img' />
                    {/* <img src={artist1} alt="artist" /> */}
                    <div className='artist__detail'>
                        <h3>John Doe #47</h3>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TopArtist