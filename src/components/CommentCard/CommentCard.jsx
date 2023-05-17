import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = (props) => {
  return (
    <>
      <AuthorInfo comment={props}/>
    </>
  )
}

export default CommentCard