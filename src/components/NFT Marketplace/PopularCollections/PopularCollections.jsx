import React, {useRef} from 'react'
import './PopularCollections.css'

const PopularCollections = () => {

    const containerRef = useRef(null);

    // For the Scroll Buttons
    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 400;
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 400;
        }
    };

    return (
        <section className="popCollection__section">
            <div className="popCollection__title">
                <h1>Popular Collections</h1>
                <div className='head__buttons'>
                    <div onClick={handleScrollLeft} className="left__nav"><i className="uil uil-angle-left"></i></div>
                    <div onClick={handleScrollRight} className="right__nav"><i className="uil uil-angle-right"></i></div>
                </div>
            </div>
        </section>
    )
}

export default PopularCollections
