import React from 'react'
import './Mountains.css'
import Mountain from '../../images/mtns.png'

const Mountains = () => {
    return (
        <>
            <div className="mtns">
                <img src={Mountain} alt="mtns" />
            </div>
        </>
    )
}

export default Mountains