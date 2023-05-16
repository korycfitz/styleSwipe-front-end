//css 
import styles from './Comments.module.css'
//components
import CommentCard from "../CommentCard/CommentCard";
const Comments = () => {
  return (
    <div className={styles.container}>
      <CommentCard />
    </div>
  )
}

export default Comments;