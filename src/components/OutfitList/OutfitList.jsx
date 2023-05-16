// components
import OutfitCard from '../OutfitCard/OutfitCard'

// css
import styles from '../OutfitList/OutfitList.module.css'

const OutfitList = (props) => {
  return (
    <main>
      {props.outfits.map((outfit, idx) => (
        <OutfitCard key={idx} outfit={outfit} user={props.user}/>
      ))}
    </main>
  )
}

export default OutfitList