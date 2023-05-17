// components
import DateCard from '../DateCard/DateCard'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = (props) => {

  return (
    <div className={styles.container}>
      {console.log(props)}
      {/* <DateCard outfit={outfit}/> */}
    </div>
  )
}

export default AuthorInfo
