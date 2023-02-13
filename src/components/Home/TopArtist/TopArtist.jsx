import React from 'react'

import './TopArtist.css'

import { motion } from 'framer-motion'

import { artist1, artist2, artist3, artist4, artistImg1, artistImg2, artistImg3, artistImg4 } from '../../../images'

const TopArtist = () => {
    return (
        <motion.section
            initial={{ y: '20', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            // viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='artist__section'
        >
            <h1>Top Live Artist</h1>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>

            <div className="artist__cardholder">

                <div className="artist__card">
                    <img src={artistImg1} alt="artistImg" className='artist__img' />
                    <img src={artist1} alt="artist" className='artist' />
                    <div className='artist__detail'>
                        <h3>John Doe #47</h3>
                    </div>
                </div>

                <div className="artist__card">
                    <img src={artistImg2} alt="artistImg" className='artist__img' />
                    <img src={artist2} alt="artist" className='artist' />
                    <div className='artist__detail'>
                        <h3>Mika Sins #34</h3>
                    </div>
                </div>

                <div className="artist__card">
                    <img src={artistImg3} alt="artistImg" className='artist__img' />
                    <img src={artist3} alt="artist" className='artist' />
                    <div className='artist__detail'>
                        <h3>Carl John #22</h3>
                    </div>
                </div>

                <div className="artist__card">
                    <img src={artistImg4} alt="artistImg" className='artist__img' />
                    <img src={artist4} alt="artist" className='artist' />
                    <div className='artist__detail'>
                        <h3>Michal Doe #77</h3>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}

export default TopArtist