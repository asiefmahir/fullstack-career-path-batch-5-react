import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Todos from './components/Todos';
import PostDetails from './components/PostDetails';
import Counter from './components/Counter';
import {useRef, useEffect} from 'react'
import Form from './components/Form';

function App() {
  const inputRef =  useRef();


  useEffect(() => {
    // console.log(inputRef.current)
    inputRef.current.focus()
    // document.ge

  }, [])

  return (
    <div className="App">
       <Form placeholder = {'Our Form'} ref = {inputRef}/>
       <h3>Demo</h3>
    </div>
  );
}

export default App;
