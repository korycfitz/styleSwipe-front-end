//components
import Outfit from "../../components/Outfit/Outfit"
import Comments from "../../components/Comments/Comments"
// import NewComment from "../../components/NewComment/NewComment"

const ShowOutfit = (props) => {
  console.log(props)
  if (!props.outfits.length) return <h1>Loading...</h1>
  const randomIndex = Math.floor(Math.random() * props.outfits.length)
  const randomOutfit = props.outfits[randomIndex]
  console.log(randomIndex)

  return (
    <Outfit outfit={randomOutfit}/>
  )
}

export default ShowOutfit