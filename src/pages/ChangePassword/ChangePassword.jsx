//npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// services
import * as authService from '../../services/authService'
// css
import styles from './ChangePassword.module.css'

const ChangePassword = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    newPasswordConf: '',
  })

  const handleChange = (evt) => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      await authService.changePassword(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      setMessage(err.message)
    }
  }

  const { password, newPassword, newPasswordConf } = formData

  const isFormInvalid = () => {
    return !(password && newPassword && newPassword === newPasswordConf)
  }

  return (
    <main className={styles.container}>
      <h1>Change Password</h1>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Current Password
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            New Password
            <input
              type="password"
              value={newPassword}
              name="newPassword"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Confirm New Password
            <input
              type="password"
              value={newPasswordConf}
              name="newPasswordConf"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.buttonGroup}>
          <button className={`${styles.button} ${styles.cancel}`} onClick={() => navigate('/')}>
            Cancel
          </button>
          <button className={styles.button} disabled={isFormInvalid()}>
            Change Password
          </button>
        </div>
      </form>
    </main>
  )
}

export default ChangePassword

