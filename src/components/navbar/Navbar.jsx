import './navbar.scss'
import React from 'react'

const Navbar = () =>{

    return(
        <div className='navbar'>
            <div className="wrapper">
                <span>Slavi Hristev</span>
                <div className="social">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar