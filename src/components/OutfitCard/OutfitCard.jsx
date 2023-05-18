
// npm modules
import { useState } from 'react'

// components
import OutfitPreview from '../OutfitPreview/OutfitPreview'
import OutfitDesc from '../OutfitDesc/OutfitDesc'

// css
import styles from './OutfitCard.module.css'

const OutfitCard = ({outfit}) => {
  const [displayOutfitDesc, setDisplayOutfitDesc] = useState(false)

  function handleInfoClick() {
    setDisplayOutfitDesc(!displayOutfitDesc)
  }

  return ( 
    <div className={styles.container}>
      {!displayOutfitDesc &&
      <>
        <h3>OUTFIT CARD</h3>
        <h2>test</h2>
        {/* <img
          src={outfit.photo}
          alt="Outfit Photo"
        /> */}
        <OutfitPreview outfit={outfit}/>      
      </>}
      {displayOutfitDesc &&
      <>
        <h3>OUTFIT CARD</h3>
        <OutfitDesc outfit={outfit}/>
      </>}


      <button onClick={handleInfoClick}>
        {displayOutfitDesc ? "hide" : "show"} description
      </button>
    </div>
  )
}

export default OutfitCard