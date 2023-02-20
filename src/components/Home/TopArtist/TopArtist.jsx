import React from 'react'

import './TopArtist.css'

import { motion } from 'framer-motion'

import { topArtist } from '../../../utils/constants'

const TopArtist = () => {
    return (
        <motion.section
            initial={{ y: '10', opacity: 0 }}
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

                {topArtist.map((item) => {
                    return(
                        <div className="artist__card">
                            <img src={item.image} alt="artistImg" className='artist__img' />
                            <img src={item.artistPic} alt="artist" className='artist' />
                            <div className='artist__detail'>
                                <h3>{item.name} {item.number}</h3>
                            </div>
                        </div>
                    )
                })}

            </div>
        </motion.section>
    )
}

export default TopArtist