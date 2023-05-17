// css
import styles from './OutfitPreview.module.css'

const OutfitPreview = (props) => {
  return (
    <div className={styles.container}>
      <section>
        <h5>change &lt;img&gt; src value to correct props:</h5>
      <img className={styles.outfitPost} src={props.outfit.photo} alt="The user's outfit" />
      </section>
    </div>
  )
}

export default OutfitPreview
