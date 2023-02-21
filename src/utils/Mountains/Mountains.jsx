import React from 'react'
import './Mountains.css'
import Mountain from '../../images/mtns.png'

import {motion} from 'framer-motion'

const Mountains = () => {
    return (
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}

                className='mtns__img' 
                src={Mountain} 
                alt="mtns" 
            />
    )
}

export default Mountains