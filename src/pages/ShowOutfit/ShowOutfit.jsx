//components
import Outfit from "../../components/Outfit/Outfit"
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"

//services
import * as profileService from '../../services/profileService'

const ShowOutfit = (props) => {
  return (
    <>
      {props.outfits.map((outfit) => (
        <div>
          <>
            {/* ADD KEY HERE */}
            {console.log(outfit)}
          <h1>{outfit.author.name}</h1>
          <h2>{outfit.description}</h2>
          <h2>{outfit.author.photo}</h2>
        </>
        </div>
      ))}
    </>
  )
}

export default ShowOutfit