import logo from './logo.svg';
import './App.css';
import {useGetAllNotesQuery, useRemoveNoteMutation} from './store/api/notes'

function App() {
  const {data, isError, isLoading, error} = useGetAllNotesQuery();
  const [remoteNoteMutation] = useRemoveNoteMutation()
  // console.log(janiNah);
  return (
    <div className="App">
      <h2>
        Note App
      </h2>
      {isLoading && <p>Loading..............</p>}
      {isError && <p>{error?.message}</p>}
      <ul>
        {data?.map(item => (
          <li key = {item.id}>
              <span>{item.title}</span>
              <button onClick = {() => remoteNoteMutation(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
