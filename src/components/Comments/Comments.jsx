//css 
import styles from './Comments.module.css'
//components
import CommentCard from "../CommentCard/CommentCard";
const Comments = ({outfit}) => {
  return (
    <div className={styles.container}>
      {console.log(outfit)}
      <CommentCard outfit={outfit}/>
    </div>
  )
}

export default Comments;