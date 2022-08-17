// import { useEffect, useState } from 'react';
import {useFetchLogic} from '../useFetchLogic'

const Posts = () => {
    const {data: posts, isLoading, errorMessage} = useFetchLogic([], `https://jsonplaceholder.typicode.com/posts`)
    

    return (
        <div>
            <h2>All Posts</h2>
            {isLoading && <h3>isLoading.......</h3>}
            {errorMessage && <h4>{errorMessage}</h4>}
            <ul>
                {posts.map(item => (
                    <li>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts