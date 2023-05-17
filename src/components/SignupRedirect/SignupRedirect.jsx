import { NavLink } from 'react-router-dom'

//css import
import styles from './SignupRedirect'



const SignupRedirect = () => {
  return (
    
    <div className={styles.container}>

      <NavLink to="http://localhost:5173/auth/signup">Don't have an Account?</NavLink>
      
      {/* {!displayOutfitDesc &&
      <>
        <h3>OUTFIT CARD</h3>
        <OutfitPreview outfit={outfit}/>
      </>}
      {displayOutfitDesc &&
      <>
        <h3>OUTFIT CARD</h3>
        <OutfitDesc outfit={outfit}/>
      </>}


      <button onClick={handleInfoClick}>
        {displayOutfitDesc ? "hide" : "show"} description
      </button> */}
    </div>
  )
}

export default SignupRedirect