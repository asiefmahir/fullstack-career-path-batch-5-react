// import { useState, useEffect } from 'react'
import { useFetchLogic } from '../useFetchLogic';

const Todos = () => {
    const {data: todos, isLoading, errorMessage} = useFetchLogic([], `https://jsonplaceholder.typicode.com/todos`)
    return (
        <div>
            <h2>
                All Todos
            </h2>
            {isLoading && <h2>IsLoading............</h2>}
            {errorMessage && <h4>{errorMessage}</h4>}
            <ul>
                {todos.map(item => (
                    <li>
                        {item.id}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos