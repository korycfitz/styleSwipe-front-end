// components
import DateCard from '../DateCard/DateCard'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({comment}) => {

  return (
    <div className={styles.container}>
      {console.log(comment)}
      {/* <DateCard outfit={outfit}/> */}
    </div>
  )
}

export default AuthorInfo
