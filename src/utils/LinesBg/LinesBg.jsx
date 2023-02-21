import React from 'react'
import './LinesBg.css'
import Lines from '../../images/lines.png'

import {motion} from 'framer-motion'

const LinesBg = () => {
    return (
        <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        
            className='lines__img' 
            src={Lines} 
            alt="lines" 
        />
    )
}

export default LinesBg