// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
import Loading from "../Loading/Loading"

// components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import NewComment from '../../components/NewComment/NewComment'

// services
import * as outfitService from '../../services/outfitService'

// css
import styles from './OutfitDetails.module.css'

const OutfitDetails = (props) => {
  const { outfitId } = useParams()
  const [outfit, setOutfit] = useState(null)

  useEffect(() => {
    const fetchOutfit = async () => {
      const data = await outfitService.show(outfitId)
      setOutfit(data)
    }
    fetchOutfit()
  }, [outfitId])

  const handleAddComment = async (commentFormData) => {
    const newComment = await outfitService.createComment(outfitId, commentFormData)
    setOutfit({ ...outfit, comments: [...outfit.comments, newComment],})
  }

  if (!outfit) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{outfit.category.toUpperCase()}</h3>
          <h1>{outfit.title}</h1>
        </header>
        <span>
          <AuthorInfo content={outfit} />
          {outfit.author._id === props.user.profile &&
            <>
              <Link to={`/outfits/${outfitId}/edit`} state={outfit}>Edit</Link>
              <button onClick={() => props.handleDeleteoutfit(outfitId)}>
                Delete
              </button>
            </>
          }
        </span>
        <p>{outfit.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment}/>
      </section>
    </main>
  )
}
 
export default OutfitDetails