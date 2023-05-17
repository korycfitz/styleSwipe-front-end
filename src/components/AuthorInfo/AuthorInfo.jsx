// components
import DateCard from '../DateCard/DateCard'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({outfit}) => {


  return (
    <div className={styles.container}>
      <DateCard outfit={outfit}/>
    </div>
  )
}

export default AuthorInfo
