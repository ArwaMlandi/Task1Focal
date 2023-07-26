import React from 'react'

import { FaBars, FaReact } from 'react-icons/fa'
import { useState } from 'react'
import './Nav.scss'
import { HiX } from 'react-icons/hi'
import { AiFillSignal } from 'react-icons/ai'
const data = [
    {
        label: 'GitHub',
       
    },
    {
        label: 'Sign in',
       
    },
   
]
const Navbar = () => {
    const [toogle, settoggle] = useState(false);
    const handleToggle = () => {
        settoggle(!toogle);

    }
    const handleItemClick = () => {
        settoggle(false);
    };
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a to={"/"} className="navbar__container__logo">
                 
                    <AiFillSignal size={30}/>

                </a>
                <h2 className='navbar__container__brand'> Starter</h2>

            </div>
            <ul className={`navbar__container__ul ${toogle? 'active' : ' '}`}>
                {data.map((item, key) => (
                    <li key={key} className='navbar__container__ul__item'>
                        <a className='navbar__container__ul__item__link' onClick={handleItemClick}>
                            {item.label}

                        </a>
                    </li>
                ))}

            </ul>
            <div className='nav-icon' onClick={handleToggle}>
                {
                    toogle ? <HiX size={30} /> : <FaBars size={30} />
                }

            </div>
        </nav>
    )
}

export default Navbar