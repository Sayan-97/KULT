import React from 'react'
import {motion} from 'framer-motion'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Gamepedia = () => {
    return (
        <div style={{ position: 'absolute' }}>
            <motion.button
                style={{border: '2px solid', borderColor: 'red', borderBlockColor: 'blue', background: 'transparent' }}
            >Hello</motion.button>
        </div>
    )
}

export default Gamepedia
