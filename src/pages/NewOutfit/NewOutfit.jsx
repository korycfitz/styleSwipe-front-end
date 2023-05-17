import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const NewOutfit = () => {
  const navigate = useNavigate()
  const imgInputRef = useRef(null)

  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')

  const handleChangePhoto = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }

      const formData = new FormData()
      formData.append('photo', photo)
      formData.append('description', description)

      const response = await fetch('/api/outfits', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        navigate('/')
      } else {
        const data = await response.json()
        throw new Error(data.error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="new-outfit">
      <h2>Create a New Outfit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handleChangePhoto}
            ref={imgInputRef}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewOutfit
