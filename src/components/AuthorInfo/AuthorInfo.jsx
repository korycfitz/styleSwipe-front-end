// components
import DateCard from '../DateCard/DateCard'

// css
// import styles from './AuthorInfo/AuthorInfo.module.css'

const AuthorInfo = (props) => {
  const { content } = props

  const photo = content.author.photo

  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo
