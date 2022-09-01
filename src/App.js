import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTask, fetchPosts } from './store/api/fetchTask';

const App = () => {
  const counter = useSelector(state => state.counter);
  const {tasks, error} = useSelector(state => state.task);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchTask)
    dispatch(fetchPosts)
  }, [dispatch])
  
  return (
    <div>
        <p>
          The value of the counter is {counter}
        </p>
        <button onClick = {() => dispatch({type: 'counter/increment'})}>
            Increment By 1
        </button>
          <button onClick = {() => dispatch({type: 'counter/decrement'})}>
            Decrement By 1
        </button>
        <ul>
          {tasks.map(item => (
            <p>{item.title}</p>
          ))}
        </ul>
        {error && <p>{error}</p>}
    </div>
  )
}

export default App