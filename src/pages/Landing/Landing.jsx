// css
import styles from './Landing.module.css'
import NavBar from '../../components/NavBar/NavBar'


const Landing = ({ user, handleLogout}) => {
  return (
    <main className={styles.container}>
      <NavBar className={styles.container} user={user} handleLogout={handleLogout} />
        <h2 className='welcome-message'>hello, {user ? user.name : 'friend'}</h2>
    </main>
  )
}

export default Landing