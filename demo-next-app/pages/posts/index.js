
export async function getStaticProps () {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=5`);
    const posts = await response.json();
    return {
        props: {posts}
    }
}

const Posts = ({posts}) => {
  return (
    <div>
        <h2>
            Posts
        </h2>
        <ul>
            {posts?.map(item => (
                <li key = {item.id}>
                    {item.title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Posts