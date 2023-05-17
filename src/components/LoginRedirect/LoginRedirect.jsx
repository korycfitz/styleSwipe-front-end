//modules
import { NavLink } from "react-router-dom"

//css imports
import styles from './LoginRedirect'


const LoginRedirect = () => {
  return (
    
    <div className={styles.signupRedirect}>

      <NavLink to="http://localhost:5173/auth/login">Already have an Account?</NavLink>
      
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

export default LoginRedirect