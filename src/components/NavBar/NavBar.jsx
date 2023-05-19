// npm modules
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './NavBar.module.css'
import logo from '../../assets/styleswipe_logo.png'
import fake from '../../assets/no_userprofile_picture.png'

const NavBar = ({ user, handleLogout }) => {
  const [profile, setProfile] = useState(null)
  const fetchProfile = async () => {
    if (user && user.profileId) {
      const fetchedProfile = await profileService.getProfile(user.profileId)
      setProfile(fetchedProfile)
    }
  }
  useEffect(() => {
    fetchProfile()
  }, [user])

  // We have a bug involving this handleLogoClick redirecting to a 404, we'll be tackling this error after the project as we had to  cut it out because of a git problem we were resolving with Ben.
  const handleLogoClick = () => {
    window.location.href = '/outfits'
  }
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer} /*onClick={handleLogoClick}*/>
        <img id="app-logo" src={logo} alt="StyleSwipe" />
      </div>
      <ul className={styles.navLinks}>
        {user ? (
          <li>
            <div className={styles.profileMenu}>
              {profile && profile.photo ? (
                <div className={styles.profileImage}>
                  <img src={profile.photo} alt="Profile" />
                </div>
              ) : (
                <div className={styles.profileImage}>
                  <img src={fake} alt="Profile" />
                </div>
              )}
              <ul className={styles.profileOptions}>
                <li>
                  <button className={`${styles.logoutBtn} ${styles.profileButton}`} onClick={handleLogout}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/auth/login" activeClassName={styles.active}>
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup" activeClassName={styles.active}>
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar