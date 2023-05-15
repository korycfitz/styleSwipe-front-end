// css
import styles from './Landing.module.css'
import NavBar from '../../components/NavBar/NavBar'


const Landing = ({ user, handleLogout}) => {
  return (
    <>
      <NavBar className={styles.container} user={user} handleLogout={handleLogout} />
      <body className={styles.container}>
        <h2 className='welcome-message'>hello, {user ? user.name : 'friend'}</h2>
      </body>
    </>
  )
}

export default Landing