import React from 'react'
import './IGO.css'
import gameImage1 from '../../images/LOE.png'
import gameImage2 from '../../images/game_pic2.jpg'
import gameImage3 from '../../images/game_pic3.jfif'
import gameImage4 from '../../images/game_pic4.png'
import gameImage5 from '../../images/game_pic5.png'
import gameImage6 from '../../images/game_pic6.png'

const IGO = () => {
    return (
        <section className='IGO__section'>

            <h1>Upcoming IGO's</h1>
            <p className='IGO__desc'>Easy to join IGOs designed to bring ease for all users. Stay connected and subscribe to stay up-to-date with our IGOs and upcoming projects.</p>

            <div className="IGO__cardholder">

                <div className='IGO__card'>
                    <img src={gameImage1} alt="game-pic1" />
                    <div className="card__details">
                        <h3>The legends of Elysium</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={gameImage2} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Chain of Alliance</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={gameImage3} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Whisper of Soul</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={gameImage4} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Rage Effect</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={gameImage5} alt="game-pic1" />
                    <div className="card__details">
                        <h3>Occupy Wallstreet</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>

                <div className='IGO__card'>
                    <img src={gameImage6} alt="game-pic1" />
                    <div className="card__details">
                        <h3>The legends of Elysium</h3>
                        <div className="card__countdown">
                            <i class="uil uil-clock"></i>
                            <p>05:08:46</p>
                        </div>
                        <div className="g_top"></div>
                        <div className="g_bottom"></div>
                    </div>
                </div>
                
            </div>
            <button>View More</button>
        </section>
    )
}

export default IGO