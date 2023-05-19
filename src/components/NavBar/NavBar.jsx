import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService';
import styles from './NavBar.module.css';
import logo from '../../assets/styleswipe_logo.png';
import fake from '../../assets/no_userprofile_picture.png';


const NavBar = ({ user, handleLogout }) => {
  
  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">LOG IN</NavLink></li>
      <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/outfits">OUTFITS</NavLink></li>
      <li><NavLink to="/outfits/new">NEW OUTFIT</NavLink></li>
      <li>
        <NavLink to="/auth/logout" onClick={handleLogout}>LOG OUT</NavLink>
      </li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to="/"><img src={logo} alt="A cute owl" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar


