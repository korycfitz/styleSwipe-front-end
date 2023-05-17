//components
import Outfit from "../../components/Outfit/Outfit"
import Comments from "../../components/Comments/Comments"
// import NewComment from "../../components/NewComment/NewComment"

const ShowOutfit = (props) => {
  return (
    <>
      {props.outfits.map((outfit, idx) => (
        <>
          <Outfit key={idx} outfit={outfit}/>
          <Comments key={idx} outfit={outfit}/>

        </>
      ))}
    </>  
  )
}

export default ShowOutfit