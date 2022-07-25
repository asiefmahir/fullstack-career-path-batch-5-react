import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)// counter = 0 // counter = 1
  const [counter2, setCounter2] = useState(100);
  const [todoObj, setTodoObj] = useState(null)
  const increaseHandler = () => {
    setCounter(counter + 1) // 0 + 1 = 1 // 1 + 1 = 2
    // setMul(500 * counter3)
    // setCounter2(counter2 + 500) // 501 // 100 + 500 = 600
  } // 0 + 1 = 1 // counter = 1
  const multiHandler = () => {
    console.log("I a mul handler")
    setCounter2(counter + 100) // 0 + 100 = 100
    setCounter2(counter * 5) // 0 * 5 = 0 // 1 *5 =5 // 1 // counter = 5
     // 1 + 100 = 101
  }

  useEffect(() => {
    console.log('hello I am from useEffect')
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(res => res.json())
    .then(data => {
      setTodoObj(data) // todoObj
    })
  }, [])

  // function useEffect (callback, arr = []) {
  

  // }

  // fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setTodoObj(data)
  //   })
  // setTimeout(())
  console.log("I am outside useEffect")
  return (
    <div className="App">
     <p>The value of the counter is {counter}</p>
     <p>The value of the second counter is {counter2}</p>
     <button onClick={increaseHandler}>Increase By One</button>
     <button onClick={multiHandler}>Mul By 5</button>
     <div class="obj">
      <p>
        Id - {todoObj?.id}
      </p>
      <p>
        {todoObj?.title}
      </p>
     </div>
    </div>

    /**
     * Initial Call APP()
     * State Change // counter = 1
     * Recall APP()
     */
    // <>
    //   <Counter />
    //   <Counter />
    // </>
  );
}

function Counter () {
  const [num, setNum] = useState(0)
  const increaseHandler = () => setNum(num + 1)
  return (
    <div className="App">
     <p>The value of the num i</p>
     
     <button >Increase By One</button>
    </div>
  );
  
}

function add (a, b) {
  a++;
  return a + b
}

add (10, 20)

add (100, 200)

export default App;
