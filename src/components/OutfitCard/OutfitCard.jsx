// npm modules
// import { Link } from "react-router-dom"

// components


// css
import styles from './OutfitCard.module.css'

const OutfitCard = (props) => {
  return (
    <>
      <h1>{props.outfit._id}</h1>
      <h1>{props.outfit.description}</h1>
    </>
  )
}

export default OutfitCard