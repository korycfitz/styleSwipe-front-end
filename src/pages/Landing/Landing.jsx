// css
import styles from './Landing.module.css'

//components
import LoginRedirect from '../../components/LoginRedirect/LoginRedirect'
import SignupRedirect from '../../components/SignupRedirect/SignupRedirect'
import SingupRedirect from '../../components/SignupRedirect/SignupRedirect'


const Landing = ({user}) => {
  return (
    <main className={styles.container}>
        <h2 className='welcome-message'>hello, {user ? user.name : 'friend'}</h2>
        <LoginRedirect />
        <SingupRedirect />
        
    </main>
  )
}

export default Landing