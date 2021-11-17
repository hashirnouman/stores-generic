import React from 'react'
import { BiCart, BiSearchAlt } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import { BsPersonCircle } from 'react-icons/bs'
import '../scss/Navbar.scss'
const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="logo">
                Stores generic
            </div>
            <IconContext.Provider value={{ size: "27px" }}>

                <div className="search-div">
                    <input type="text" />
                    <div className="search-btn">
                        <BiSearchAlt style={{ paddingTop: "6px", cursor: "pointer" }} />
                    </div>
                </div>

                <div>
                    <BiCart style={{ marginRight: "20px" }} />
                    <BsPersonCircle />

                </div>
            </IconContext.Provider>
        </nav>

    )
}

export default Navbar
