import React from 'react'
import './Collection.css'

import { motion } from 'framer-motion'

import propic from '../../../images/artist-pic2.webp'

const Collection = () => {
    return (
        <motion.section
            initial={{ y: '20', opacity: 0 }}
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

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

                <div className="collection__profile">
                    <img src={propic} alt="" />
                    <div className="pro__detail">
                        <h3 className="pro__name">Robert Fox</h3>
                        <p>#394</p>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}

export default Collection