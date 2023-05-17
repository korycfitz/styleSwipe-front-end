import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({comment}) => {
  return (
    <>
      <AuthorInfo comment={comment}/>
    </>
  )
}

export default CommentCard