// components
import DateCard from '../DateCard/DateCard'

// css
import styles from './OutfitPreview.module.css'

const OutfitPreview = (props) => {
  return (
    <div className={styles.container}>
      <section>
      <img src={props.outfit.author.photo} alt="The user's avatar" />
        <DateCard />
      </section>
    </div>
  )
}

export default OutfitPreview
