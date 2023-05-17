// modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// css
import styles from './Outfit.module.css'

//components
import OutfitCard from '../OutfitCard/OutfitCard'
import Comments from '../Comments/Comments'
import NewComment from '../NewComment/NewComment'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import OutfitIcons from '../OutfitIcons/OutfitIcons'
import Swipe from '../Swipe/Swipe'

const Outfit = (props) => {

  return (
    <main>
      <div className={styles.container}>
        <h1>HI</h1>
          <OutfitCard outfit={props.outfit} user={props.user}/>
          <OutfitIcons />
          <AuthorInfo />
          <OutfitCard />
          <Outfit />
          <Comments />
          <NewComment />
          <Swipe />
      </div>
    </main>
  )
}

export default Outfit