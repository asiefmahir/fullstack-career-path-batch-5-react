import './App.css';
import {useState, useContext} from 'react'
import { BoardContext } from './contexts/Board';


function App() {
  const [boardTitle, setBoardTitle] = useState('')
  const {boards, dispatchBoardAction} = useContext(BoardContext)
  return (
    <div className="App">
      <form>
          <input type="text" value = {boardTitle} onChange = {(event) => setBoardTitle(event.target.value)} />
          <button type='submit'onClick = {(event) => {
            event.preventDefault();
            dispatchBoardAction({type: 'CREATE_BOARD', payload: {title: boardTitle}})
          }} >Create Board</button>
      </form>
      <ul>
        {boards.map(item => (
          <li>
              {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
