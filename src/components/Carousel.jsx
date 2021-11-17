import React from 'react'
import '../scss/Carousel.scss'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
const Carousel = () => {
    return (

        <div style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>
            <div className="board">
                <IconContext.Provider value={{ size: "40px", color: "white" }}>
                    <BsArrowLeftSquare />
                    <BsArrowRightSquare />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Carousel
