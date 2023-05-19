// npm modules
import { useState } from "react"

// css
import styles from './NewComment.module.css'
import Icon from "../Icon/Icon"

const NewComment = (props) => {
  const [formData, setFormData] = useState({ content: '' })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddComment(formData)
    setFormData({ content: ''})
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="content"
        id="text-input"
        value={formData.content}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit"><Icon category="Create" /></button>
    </form>
  )
}

export default NewComment;