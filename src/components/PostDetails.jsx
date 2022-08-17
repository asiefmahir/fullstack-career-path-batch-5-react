// import {useEffect, useState} from 'react'
import { useFetchLogic } from '../useFetchLogic';

const PostDetails = () => {
    const {data: post, isLoading, errorMessage} = useFetchLogic(null, `https://jsonplaceholder.typicode.com/posts/1`)
  return (
    <div>
        <h2>
            PostDetails
        </h2>
        {isLoading && <h3>isLoading.......</h3>}
            {errorMessage && <h4>{errorMessage}</h4>}

        <p>{post?.title}</p>
        <p>{post?.id}</p>

    </div>
  )
}

export default PostDetails