// components
import OutfitCard from '../../components/OutfitCard/OutfitCard'

// css
import styles from './OutfitList.module.css'

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