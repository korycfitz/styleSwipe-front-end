// css
import styles from './OutfitDesc.module.css'


const OutfitDesc = (props) => {


  return (
    <div className={styles.container}>
      <h4>{props.outfit.description}</h4>
    </div>
  )
}

export default OutfitDesc