
export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=5`);
    const posts = await response.json()
  return {
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    paths: posts.map(post => ({
        params: {postId: post.id.toString()}
    })),
    fallback: true, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps (context) {
    const response = await fetch(`http://localhost:4000/posts/${context.params.postId}`);
    const post = await response.json()

  return {
    // Passed to the page component as props
    props: { post },
  }
}

const PostDetails = ({post}) => {
  return (
    <div>
        <h2>
            Details of {post?.id}
        </h2>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
    </div>
  )
}

export default PostDetails