// css
import styles from './DateCard.module.css'

const DateCard = (props) => {
  const date = new Date(props.outfit.createdAt).toLocaleDateString()
  return (
    <div className={styles.container}>

      <h5>DATE: {date}</h5>
    </div>
  )
}

export default DateCard
