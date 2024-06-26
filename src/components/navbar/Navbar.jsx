import './navbar.scss'
import React from 'react'
import {motion} from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () =>{

    return(
        <div className='navbar'>
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Slavi Hristev</motion.span>
                <div className="social">
                <a href="https://www.instagram.com/slavihristevv/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/slavi-hristev-792980238/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/SlaviHristev"><img src="/github.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar