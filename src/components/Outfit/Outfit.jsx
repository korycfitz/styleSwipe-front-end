

// css 
import styles from './Outfit.module.css'

//components
import OutfitCard from '../OutfitCard/OutfitCard'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
// import NewComment from '../NewComment/NewComment'
// import OutfitIcons from '../OutfitIcons/OutfitIcons'
// import Swipe from '../Swipe/Swipe'

const Outfit = ({outfit}) => {
  console.log(outfit)
  return (
    <main>
      <div className={styles.container}>
        <h1>Outfit Section</h1>
        {/* THIS WORKS */}
        {/* <img src={outfit.photo}/> */}
          <AuthorInfo outfit={outfit}/>
          <OutfitCard outfit={outfit}/> 
          {/* // <OutfitIcons />
          // <AuthorInfo />
          // <OutfitCard />
          // <Outfit />
          // <NewComment />
          // <Swipe />*/}
      </div>
    </main>
  )
}

export default Outfit