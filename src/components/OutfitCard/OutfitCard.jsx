// npm modules
// import { Link } from "react-router-dom"

// components
import OutfitPreview from '../OutfitPreview/OutfitPreview'
import OutfitInfo from '../OutfitDesc/OutfitDesc'

// css
// import styles from './OutfitCard.module.css'

const OutfitCard = ({outfit}) => {
  return (
    <>
      <h1>TEST</h1>
      <OutfitPreview outfit={outfit}/>
      {/* <OutfitInfo /> */}

    </>
  )
}

export default OutfitCard