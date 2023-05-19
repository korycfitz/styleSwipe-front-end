// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from '../../assets/branding/logo.svg'

// css
import styles from './NavBar.module.css'

// components
import WeatherInfo from '../WeatherInfo/WeatherInfo'

const NavBar = ({ user, handleLogout, weather }) => {
  
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
      {weather.weather && 
        <li>
          <WeatherInfo weather={weather} />
        </li>
      }
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


