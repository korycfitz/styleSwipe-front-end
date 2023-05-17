// css
import styles from './OutfitPreview.module.css'

const OutfitPreview = (props) => {
  return (
    <div className={styles.container}>
      <section>
        <h5>change &lt;img&gt; src value to correct props:</h5>
      <img src={props.outfit.author.photo} alt="The user's avatar" />
      </section>
    </div>
  )
}

export default OutfitPreview
