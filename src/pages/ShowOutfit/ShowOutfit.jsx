//components
import Outfit from "../../components/Outfit/Outfit"
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"

const ShowOutfit = (props) => {
  return (
    <>
      {props.outfits.map((outfit) => (
        <div>
          {/* ADD KEY HERE */}
        <h1>{outfit.author.name}</h1>
        </div>
      ))}
    </>
  )
}

export default ShowOutfit