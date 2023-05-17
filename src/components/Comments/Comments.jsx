//css 
import styles from './Comments.module.css'
//components
import CommentCard from "../CommentCard/CommentCard";
const Comments = (props) => {
  return (
    <div className={styles.container}>
      {props.outfit.comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default Comments;