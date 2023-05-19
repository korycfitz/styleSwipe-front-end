// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from '../../assets/styleswipe_logo.png'

// css
import styles from './NavBar.module.css'

// components

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
      <NavLink to="/"><img src={logo} alt="StyleSwipe" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar


