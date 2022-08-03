// import {useReducer} from 'react'
// import {counterReducer} from './reducers/counerReducer'
// import './App.css';


// const initState = 100



// function App() {
//   // const [counter, dispatch] = useReducer(counterReducer, initState)

//   // return (
//   //   <div className="App">
//   //       <p>
//   //         The value of the Counter is {counter}
//   //       </p>

//   //       <button onClick = {() => dispatch({type: 'INCREASE_COUNTER', payload: 1 }) } >
//   //           Increase By One
//   //       </button>
//   //       <button onClick = {() => dispatch({type: 'INCREASE_COUNTER', payload: 10 }) } >
//   //           Increase By 10
//   //       </button>
//   //       <button onClick = {() => dispatch({type: 'DECREASE_COUNTER', payload: 1 })} >
//   //           Decrease By One
//   //       </button>
//   //       <button onClick = {() => dispatch({type: 'DECREASE_COUNTER', payload: 5 })} >
//   //           Decrease By 5
//   //       </button>
//   //   </div>
//   // );

//   return (

//   )
// }

import './App.css';
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {

  return (
    <div className="App">
      <Form />
      <StudentSection />

    </div>
  );
}

export default App;