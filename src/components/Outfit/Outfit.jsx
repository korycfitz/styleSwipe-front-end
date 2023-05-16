// css
import styles from './Outfit.module.css'

//components
import OutfitCard from '../OutfitCard/OutfitCard'
import Comments from '../Comments/Comments'
import NewComment from '../NewComment/NewComment'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import OutfitIcons from '../OutfitIcons/OutfitIcons'

const Outfit = (props) => {
  return (
    <main>
      <div className={styles.container}>
        {props.outfits.map((outfit, idx) => (
          <OutfitCard key={idx} outfit={outfit} user={props.user}/>
        ))}
        <OutfitIcons />
        <AuthorInfo />
        <OutfitCard />
        <Outfit />
        <Comments />
        <NewComment />
      </div>
    </main>
  )
}

export default Outfit