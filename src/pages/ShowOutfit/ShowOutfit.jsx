//components
import Outfit from "../../components/Outfit/Outfit"
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"

//services
import * as profileService from '../../services/profileService'

const ShowOutfit = (props) => {
  return (
    <>
      {props.outfits.map((outfit, idx) => (
        <div>
          <>
            {/* ADD KEY HERE */}
          <h1>{outfit.author.name}</h1>
          <img src={outfit.author.photo} alt={outfit.author.name} />
          <h2>{outfit.description}</h2>
        </>
        </div>
      ))}
    </>
  )
}

export default ShowOutfit