import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="leftContainer">
            <img src="https://www.freepnglogos.com/uploads/eagle-png-logo/lakes-eagles-png-logo-14.png" alt="" />
        </div>
        <div className="rightContainer">
            <div className='pages'>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='iconContainer'>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Header