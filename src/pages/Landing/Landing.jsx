// css
import styles from './Landing.module.css'


const Landing = ({user}) => {
  return (
    <main className={styles.container}>
        <h2 className='welcome-message'>hello, {user ? user.name : 'friend'}</h2>
    </main>
  )
}

export default Landing