// components
// import Icon from '../../components/Icon/Icon'

// css
import styles from './DateCard/DateCard.module.css'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <div className={styles.container}>
      {/* <Icon category="Calendar" /> */}
      <h4>{date}</h4>
    </div>
  )
}

export default DateCard
