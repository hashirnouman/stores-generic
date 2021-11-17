import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import '../scss/Bottombar.scss'
const BottomBar = () => {
    return (
        <div className="bottombar">
            <IconContext.Provider value={{ size: "20px", color: "white" }}>
                <GiHamburgerMenu />
                <div className="links">
                    <p className="link">Privary policy</p>
                    <p className="link">Privary policy</p>
                    <p className="link">Privary policy</p>
                </div>

            </IconContext.Provider>
        </div >
    )
}

export default BottomBar
