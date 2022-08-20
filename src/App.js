import { useState, useCallback, useMemo } from 'react'
import './App.css'
import Button from './components/Button'
import CounterAppName from './components/CounterAppName'
import Title from './components/Title'

function App() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(10)

  const increaseHandler1 = useCallback(() => { // DDFF0 //FFF555
    setCounter1((prevCounter1) => prevCounter1 + 1)
  }, [])
  // {} === {}

  const increaseHandler2 = useCallback(() => {
    setCounter2((prevCounter2) => prevCounter2 + 10)
  }, [])

  const isEven = useMemo(() => {
    let i = 0;

    while (i <= 1000000000) {
      i++
    }
    return counter1 % 2 === 0 ? 'even' : 'odd'
  }, [counter1])


  return (
    <div className="App">
      <Title />
      {/* <p>The Value Of Counter1 is {counter1}</p> */}
      <CounterAppName appName = 'Counter1' counter = {counter1}/>
      <p>{isEven}</p>
      {/* <button onClick = {increaseHandler1}>Increase By One</button> */}
      <Button submitHandler={increaseHandler1} label = 'Increase By One'/>
      <hr />
      <CounterAppName appName = 'Counter2' counter = {counter2} />
      {/* <button onClick = {increaseHandler2}>Increase By One</button> */}
      <Button submitHandler={increaseHandler2} label = 'Increase By 10'/>
      
    </div>
  );
}

export default App;
