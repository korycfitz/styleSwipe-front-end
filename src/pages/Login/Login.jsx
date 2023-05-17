import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (evt) => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate(`/outfits/:outfitId`)
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <main className={styles.container}>
      <h1>Log In</h1>
      <div className={styles.box}>
        <p className={styles.message}>{message}</p>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={`${styles.label} ${styles.biggerLabel}`}>
              Email
            </label>
            <input type="text" value={email} name="email" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label className={`${styles.label} ${styles.biggerLabel}`}>
              Password
            </label>
            <input type="password" value={password} name="password" onChange={handleChange} />
          </div>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${styles.cancel}`}
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className={styles.button} disabled={isFormInvalid()}>
              Log In
            </button>
          </div>
          <br></br>
          <Link to="/auth/signup" className={styles.link}>
            Don't have an Account?
          </Link>
        </form>
      </div>
    </main>
  )
}

export default LoginPage
