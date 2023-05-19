// css
import styles from './Landing.module.css'
import logo from '../../assets/landing_logo.png'

const Landing = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} alt="Landing Logo" className={styles.logo} />
      </div>
    </main>
  )
}

export default Landing