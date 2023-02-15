import React from 'react'
import './OurTeam.css'

import { motion } from 'framer-motion'

import { artist2, artist3, artist4} from '../../../images'


const OurTeam = () => {
  return (
    <motion.section
      initial={{ y: '20', opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{ duration: 1 }}
      className='ourTeam__section'
    >
      <div className='ourTeam__grad1'></div>
      <div className='ourTeam__grad2'></div>
      <h1>Our Team Member</h1>
      <p>Team at KULT believes in giving their utmost best to bring to the people the best product possible. Our hardworking team is always there to support and guide projects in the right direction.</p>
      <div className="team__members">

        <div className="team__member">
          <div className='pic__radius'></div>
          <img src={artist4} alt="Img" />
          <div className="team__card">
            <h3>Karn Chakravarty</h3>
            <span>CEO</span>
          </div>
        </div>

        <div className="team__member">
          <div className='pic__radius'></div>
          <img src={artist2} alt="Img" />
          <div className="team__card">
            <h3>Daniel Sohail</h3>
            <span>CFO</span>
          </div>
        </div>

        <div className="team__member">
          <div className='pic__radius'></div>
          <img src={artist3} alt="Img" />
          <div className="team__card">
            <h3>Topobar Layek</h3>
            <span>UI/UX</span>
          </div>
        </div>

        <div className="team__member">
          <div className='pic__radius'></div>
          <img src={artist4} alt="Img" />
          <div className="team__card">
            <h3>Swatanshu Dey</h3>
            <span>Graphics</span>
          </div>
        </div>

        <div className="team__member">
          <div className='pic__radius'></div>
          <img src={artist2} alt="Img" />
          <div className="team__card">
            <h3>Sayan Dey</h3>
            <span>Frontend</span>
          </div>
        </div>

        <div className="team__member">
          <div className='pic__radius'></div>
          <img src={artist3} alt="Img" />
          <div className="team__card">
            <h3>Amit Gorai</h3>
            <span>UI/UX</span>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default OurTeam