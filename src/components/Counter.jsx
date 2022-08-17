// import {useState} from 'react'
import { useCounter } from '../hooks/useCounter';

const Counter = () => {
    const {counter, increaseHandler, decreaseHandler} = useCounter(0)
    // useCounter(100)
  return (
    <div>
        <p>
            The value of the counter is {counter}
        </p>
        <button onClick = {() => increaseHandler(1)}>
            Increase By One
        </button>
        <button onClick = {() => decreaseHandler(1)}>
            Decrease By One
        </button>
    </div>
  )
}

export default Counter