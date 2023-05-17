import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
import logo from "../../assets/styleswipe_logo.png"


const NavBar = ({ user, handleLogout }) => {
  const handleLogoClick = () => {
    window.location.href = "/outfits/:outfitId" 
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
      <img
          id="app-logo"
          src={logo}
          width="50"
          height="50"
          alt="StyleSwipe"
        />
        <h1>StyleSwipe</h1>
      </div>
      <ul className={styles.navLinks}>
        {user ? (
          <li>
            <div className={styles.profileMenu}>
              <div className={styles.profileImage}>
                <img src={user.profilePicture} alt="Profile" />
              </div>
              <ul className={styles.profileOptions}>
                <li>
                  <NavLink to="/profiles" activeClassName={styles.active}>
                    Profiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/auth/change-password"
                    activeClassName={styles.active}
                  >
                    Change Password
                  </NavLink>
                </li>
                <li>
                  <button className={styles.logoutBtn} onClick={handleLogout}>
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

