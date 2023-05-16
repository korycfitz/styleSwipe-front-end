// components
import OutfitCard from '../OutfitCard/OutfitCard'

// css
// import styles from './OutfitList.module.css'

//components
import Outfit from '../Outfit/Outfit'
import Comments from '../Comments/Comments'
import NewComment from '../NewComment/NewComment'

const OutfitList = (props) => {
  return (
    <main>
      {props.outfits.map((outfit, idx) => (
        <OutfitCard key={idx} outfit={outfit} user={props.user}/>
      ))}
      <Outfit />
      <Comments />
      <NewComment />
    </main>
  )
}

export default OutfitList