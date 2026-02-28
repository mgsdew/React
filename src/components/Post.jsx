

export default function Post({ post }) {
  return (
    <div className="card_posts">
      <h4 className="post_title">{post.title}</h4>
      <p>{post.body}</p>
    </div>
  )
}