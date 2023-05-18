// components
import OutfitCard from '../../components/OutfitCard/OutfitCard'

// css
import styles from './OutfitList.module.css'

const OutfitList = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      {props.outfits.map(outfit => (
        <OutfitCard key={outfit._id} outfit={outfit} />
      ))}
    </main>
  )
}

export default OutfitList