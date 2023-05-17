import styles from './Landing.module.css'
import logo from '../../assets/landing_logo.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h2 className={styles.welcomeMessage}>Hello, {user ? user.name : 'friend'}</h2>
      <img src={logo} alt="Landing Logo" className={styles.logo} />
    </main>
  )
}

export default Landing
