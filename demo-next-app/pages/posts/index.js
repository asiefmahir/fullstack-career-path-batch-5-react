import {useState} from 'react'
import { useRouter } from 'next/router'
export async function getServerSideProps () {
    const response = await fetch(`http://localhost:4000/posts`);
    const posts = await response.json();
    return {
        props: {posts},
        // revalidate: 60 // isr - Incremental Static Regeneration
    }
}

const Posts = ({posts}) => {
    const [title, setTitle] = useState('')
    const router = useRouter()
    const createHandler = async () => {
        const post = {
            id: Date.now().toString(),
            title: title,
            body: 'body 11',
            userId: 11
        }

       await fetch(`http://localhost:4000/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(() => {
                router.push('/posts')
            })
    }
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
        <input type="text" value = {title} onChange = {(e) => setTitle(e.target.value)} />
        <button onClick= {() => createHandler()} >
            Create New Post
        </button>
    </div>
  )
}

export default Posts