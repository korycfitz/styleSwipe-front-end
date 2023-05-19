// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

// css
import styles from './EditOutfit.module.css'

const EditOutfit = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateOutfit(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Outfit</h1>
        <label htmlFor="title-input">Outfit URL</label>
        <input
          required
          type="text"
          name="photo"
          id="title-input"
          value={formData.photo}
          placeholder="Outfit URL"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="description"
          id="text-input"
          value={formData.description}
          placeholder="Text"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditOutfit;