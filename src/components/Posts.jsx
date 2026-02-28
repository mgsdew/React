import { use } from "react"
import  Post from "./Post"

export default function Posts({ postsPromise }) {
  
    const posts = use(postsPromise)
    console.log(posts)
  return (
    <div className="card_posts">
      <h3>All Posts are here : {posts.length}</h3>
      {
        posts.map(post => <Post key={post.id} post={post} />)
      }
    </div>
  )
}
