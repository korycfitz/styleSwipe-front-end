// npm modules
// import { Link } from "react-router-dom"

// components
import OutfitPreview from '../OutfitPreview/OutfitPreview'
import OutfitInfo from '../OutfitDesc/OutfitDesc'

// css
// import styles from './OutfitCard.module.css'

const OutfitCard = (props) => {
  return (
    <>
      <h1>{props.outfit.description}</h1>
      <h1>TEST</h1>
      <OutfitPreview />
      <OutfitInfo />

    </>
  )
}

export default OutfitCard