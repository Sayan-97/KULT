import React from 'react'
import './Collection.css'

import { motion } from 'framer-motion'

import { topCollections } from '../../../utils/constants'

const Collection = () => {
    return (
        <motion.section
            initial={{ y: '10', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{ duration: 1 }}
            className='collection__section'
        >
            <div className='gradient-6'></div>
            <div className='gradient-7'></div>
            <h1>Top Collections of Last 7 Days</h1>
            <div className="collections">

                {topCollections.map((item) => {
                    return (
                        <div className="collection__profile">
                            <div className='profile__grad'></div>
                            <img src={item.image} alt="" />
                            <div className="pro__detail">
                                <h3>{item.name}</h3>
                                <p>{item.number}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </motion.section>
    )
}

export default Collection