// css
import styles from './OutfitPreview.module.css'

const OutfitPreview = ({outfit}) => {
  console.log(outfit, 'outfit')
  return (
    <div className={styles.container}>
      {/* <section>
        <img className={styles.outfitPost} src={outfit.photo} alt="The user's outfit" />
      </section> */}
    </div>
  )
}

export default OutfitPreview
