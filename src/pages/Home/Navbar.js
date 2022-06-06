import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='mt-4 nav-container px-2 shadow-xl'>
            <h2><span className='font-bold text-xl'>CarrerGuide</span><span className='dot-com'>.com</span></h2>
            <ul className='nav-menu'>
                <li className='home'>Students <FontAwesomeIcon icon={faArrowDown} /></li>
                <li>Counsellors <FontAwesomeIcon icon={faArrowDown} /></li>
                <li>Professional <FontAwesomeIcon icon={faArrowDown} /></li>
                <li>Phycometric test <FontAwesomeIcon icon={faArrowDown} /></li>
                <li>Institutes <FontAwesomeIcon icon={faArrowDown} /></li>
                <li>Pricing <FontAwesomeIcon icon={faArrowDown} /></li>

            </ul>
            <button class=" login-btn shadow"><span className='btn-content'><span className='login'>Sign in</span></span></button>
        </div>
    );
};

export default Navbar;