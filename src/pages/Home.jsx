import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(data)
                setLoading(false);
                setErrorMessage('')
            })

    }, [])

  return (
    <div>
        <Link to = '/about'>
            Go To ABout PAge
        </Link>
        <h2>
            All Todos
        </h2>
        {loading && <div>Loading........</div>}
        {todos.map(item => (
            <p>
                <Link to = {`/todos/${item.id}`}>
                    {item.title}
                </Link>
            </p>
        ))}
    </div>
  )
}

export default Home