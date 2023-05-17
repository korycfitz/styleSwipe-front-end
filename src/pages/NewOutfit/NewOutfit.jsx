// npm modules
import { useState } from "react"

//services
import * as authService from '../../services/authService'

// css
import styles from './NewOutfit.module.css'

const NewOutfit = ({ handleAddOutfit }, props) => {
  const [formData, setFormData ] = useState({
    description: '',
    photo: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		handleAddOutfit(formData)
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Image Upload</h2>
        <input type="file" />
        <input
          type="textarea"
          name="description"
          id="title-input"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewOutfit