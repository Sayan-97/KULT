import React, {useState} from 'react'
import './KultIGO.css'

import { motion } from 'framer-motion'

import { KultIGOImg1, KultIGOImg2, KultIGOImg3, KultIGOImg4, KultIGOImg5, KultIGOImg6, KultIGOImg7, KultIGOImg8, KultIGOImg9 } from '../../../images'

const KultIGO = () => {

  const [ActiveList, setActiveList] = useState('Ongoing')

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
          return <li className={`kultIGO__item ${ActiveList === item ? 'active__list' : ''}`} onClick={() => setActiveList(item)}>{item}</li>
        })}
      </ul>
      <div className="kultIGO__container">

        <div className="kultIGO__card">
          <img src={KultIGOImg1} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg2} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg3} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg4} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg5} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg6} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg7} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg8} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kultIGO__card">
          <img src={KultIGOImg9} alt="" />
          <div className="kultIGO__card-desc">
            <div className='kultIGO__grad1'></div>
            <div className='kultIGO__grad2'></div>
            <div className='kultIGO__grad3'></div>
            <h3>Fire Drago's Roaring Thunder</h3>
            <p>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
            <ul className='kultIGO__list'>
              <li>
                <h4 className='card__d'>Total Volume</h4>
                <span className='card__amt'>388489 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Floor Price</h4>
                <span className='card__amt'>789 ETH</span>
              </li>
              <li>
                <h4 className='card__d'>Sales Price</h4>
                <span className='card__amt'>599 USD</span>
              </li>
              <li>
                <h4 className='card__d'>Total Units</h4>
                <span className='card__amt'>10000</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default KultIGO