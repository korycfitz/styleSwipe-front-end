// npm modules
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
            <h1>{ outfit.title }</h1>
            <Icon category={outfit.category} />
          </span>
          <AuthorInfo content={outfit} />
        </header>
        <p>{ outfit.text }</p>
      </article>
    </Link>
  )
}

export default OutfitCard