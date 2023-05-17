import { Link } from "react-router-dom"
import styles from "./UserPage.module.css"

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonBox}>
          <Link to="/profiles" className={styles.button}>
            All Users
          </Link>
        </div>
        <div className={styles.buttonBox}>
          <Link to="/profiles/:userId/swipes" className={styles.button}>
            Swipes
          </Link>
        </div>
        <div className={styles.buttonBox}>
          <Link to="/profiles/:userId/outfits" className={styles.button}>
            My Outfits
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserPage
