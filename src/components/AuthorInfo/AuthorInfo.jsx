// components
import DateCard from '../DateCard/DateCard'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({outfit}) => {

  const photo = content.author.photo

  return (
    <div className={styles.container}>
      <h2>{outfit.author.name}</h2>
      <DateCard outfit={outfit}/>
    </div>
  )
}

export default AuthorInfo
