import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      {/* Hello Old React */}
      <Person name = "Emtiyaz"/>
      <Posts />
      {/* <Person name = "Shahid"/> */}

    </div>
  );
}

export default App;
