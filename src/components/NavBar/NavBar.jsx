import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
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

  const handleLogoClick = () => {
    window.location.href = '/outfits/:outfitId'
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <img id="app-logo" src={logo} width="50" height="50" alt="StyleSwipe" />
        <h1>StyleSwipe</h1>
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
                  <NavLink
                    to="/auth/change-password"
                    activeClassName={styles.active}
                  >
                    <button className={styles.profileButton}>Change Password</button>
                  </NavLink>
                </li>
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
