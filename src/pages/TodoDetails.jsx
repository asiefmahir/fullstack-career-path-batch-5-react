import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function TodoDetails() {
    const [todoDetails, setTodoDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');

    const {todoId} = useParams()

    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => response.json())
            .then(data => {
                setTodoDetails(data)
                setLoading(false);
                setErrorMessage('')
            })

    }, [])
  return (
    <div>
        <Link to = '/'>
            Go To Home Page
        </Link>
        {loading && <div>Loading.........</div>}
        <p>
            Id: {todoDetails?.id}
        </p>
         <p>
            userId: {todoDetails?.userId}
        </p>
         <p>
            title: {todoDetails?.title}
        </p>
         <p>
            isComplete: {todoDetails?.isComplete}
        </p>
    </div>
  )
}

export default TodoDetails