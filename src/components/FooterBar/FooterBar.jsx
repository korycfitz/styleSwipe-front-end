import { NavLink } from "react-router-dom"
import styles from "./FooterBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

const FooterBar = ({ user }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.buttonContainer}>
        {user && (
          <>
            <NavLink to="/outfits/:outfitId" className={styles.button}>
              {<FontAwesomeIcon icon={faHome} /> }
            </NavLink>
            <NavLink to="/outfits/new" className={styles.button}>
              {<FontAwesomeIcon icon={faPlus} /> }
            </NavLink>
            <NavLink to="/users/:userId" className={styles.button}>
              {<FontAwesomeIcon icon={faUser} /> }
            </NavLink>
          </>
        )}
      </div>
    </footer>
  )
}

export default FooterBar

