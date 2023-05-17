// npm modules
// import { Link } from "react-router-dom"

// components
import OutfitPreview from '../OutfitPreview/OutfitPreview'
import OutfitDesc from '../OutfitDesc/OutfitDesc'

// css
// import styles from './OutfitCard.module.css'

const OutfitCard = ({outfit}) => {
  return (
    <>
    <h3>OUTFIT CARD</h3>
      <h2>{outfit.author.name}</h2>
      <OutfitPreview outfit={outfit}/>
      <OutfitDesc outfit={outfit}/>

    </>
  )
}

export default OutfitCard