import React, { useState } from 'react'

import './KultIGO.css'

import { motion } from 'framer-motion'

import { IGOData } from '../../../utils/constants'

const KultIGO = () => {

  const [ActiveList, setActiveList] = useState('Ongoing')

  const filteredData = IGOData.filter((item) => item.category === ActiveList)

  return (
    <motion.section
      initial={{ y: '10', opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{ duration: 1 }}
      className='kultIGO__section'
    >
      <h1>Kult IGO's</h1>
      <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
      <ul className='kultIGO__nav'>
        {['Ongoing', 'Upcoming', 'Ended'].map((item) => {
          return <li key={item} className={`kultIGO__item ${ActiveList === item ? 'active__list' : ''}`} onClick={() => setActiveList(item)}>{item}</li>
        })}
      </ul>
      <div className="kultIGO__container">

        {filteredData.map((item, index) => {
          return (
            <div key={index} className="kultIGO__card" >
              <img src={item.igoImage} alt="img" />
              <div className="kultIGO__card-desc">
                <div className='kultIGO__grad1'></div>
                <div className='kultIGO__grad2'></div>
                <div className='kultIGO__grad3'></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className='kultIGO__list'>
                  <li>
                    <h4 className='card__d'>Total Volume</h4>
                    <span className='card__amt'>{item.t_vol}</span>
                  </li>
                  <li>
                    <h4 className='card__d'>Floor Price</h4>
                    <span className='card__amt'>{item.fp}</span>
                  </li>
                  <li>
                    <h4 className='card__d'>Sales Price</h4>
                    <span className='card__amt'>{item.sp}</span>
                  </li>
                  <li>
                    <h4 className='card__d'>Total Units</h4>
                    <span className='card__amt'>{item.t_units}</span>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}

      </div>
    </motion.section>
  )
}

export default KultIGO


