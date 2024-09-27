import React from 'react'
import logo from '../assest/EvmBlackLogo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";

const LeftHeader=()=>{
    return (
      <div className='left-header'>
        <img className='logo' src={logo} />
        <div className='search-bar'>
        <input className='input-box' placeholder='Search Here' />
        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} size="2xl"  style={{color: "#FFD43B",}}   />
        </div>
      </div>
    )
  
}
const RightHeader=()=>{
    return (
      <div className='right-header'>
        <ul className='nav-list'>
        <Link to='/'><li className='nav-list-item'>Home</li></Link>
       <Link to='/about'> <li className='nav-list-item'>About</li></Link>
       <Link to='/login'> <li className='nav-list-item'>Login</li></Link>
       <Link to='/signin'> <li className='nav-list-item'>Sign-In</li></Link>
       <Link to='/admin'> <li className='nav-list-item'>Admin Login</li></Link>
       <Link to=''> <li className='nav-list-item'><FontAwesomeIcon icon={faHeart} size='xl' /></li></Link>
        </ul>
      </div>
    )
}

const Header = () => {
  return (
    <div className='header'>
      <LeftHeader/>
      <RightHeader/>
    </div>
  )
}

export default Header;
