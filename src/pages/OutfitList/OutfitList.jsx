// import Outfit from "../../components/Outfit/Outfit"
// import Comments from "../../components/Comments/Comments"
// import NewComment from "../../components/NewComment/NewComment"

// const OutfitList = () => {
//   return (
//     <>
//       <Outfit />
//       <Comments />
//       <NewComment />
//     </>
//   )
// }

// export default OutfitList


// components
import BlogCard from '../../components/BlogCard/BlogCard'

// css
import styles from './BlogList.module.css'

const BlogList = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      {props.blogs.map(blog => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </main>
  )
}
 
export default BlogList