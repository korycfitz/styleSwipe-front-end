// npm modules
import { useState } from "react"

// css
import styles from './NewOutfit.module.css'

const NewOutfit = (props) => {
  const [formData, setFormData ] = useState({
    photo: '',
    description: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddOutfit(formData)
  }
  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Outfit</label>
        <input
          required
          type="text"
          name="photo"
          id="title-input"
          value={formData.text}
          placeholder="Outfit URL"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="description"
          id="text-input"
          value={formData.text}
          placeholder="Description"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewOutfit