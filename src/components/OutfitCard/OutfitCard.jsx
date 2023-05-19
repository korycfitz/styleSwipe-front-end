import { Link } from "react-router-dom"

// components
import Icon from '../Icon/Icon'
import AuthorInfo from '../AuthorInfo/AuthorInfo'

// css
import styles from './OutfitCard.module.css'

const OutfitCard = ({ outfit }) => {
  return (
    <Link to={`/outfits/${outfit._id}`} state={outfit}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>
              <img src={outfit.photo} alt="Outfit" width="100" height="100" />
            </h1>
          </span>
          <AuthorInfo content={outfit} />
        </header>
        <p>{ outfit.description }</p>
      </article>
    </Link>
  )
}

export default OutfitCard