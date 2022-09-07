import logo from './logo.svg';
import './App.css';
import { useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';

import {getNotes, removeNote} from './services/note'

function App() {
  const client = useQueryClient()
  const {data, isError, status, isLoading, fetchStatus, error} = useQuery(['notes'], getNotes);
  const noteRemoveMutation = useMutation(removeNote, {
    onSuccess: () => {
      client.invalidateQueries(['notes'])
    }
  })
  // console.log(obj);
  return (
    <div className="App">
        <h2>
          Note App
        </h2>
        {fetchStatus === 'fetching' && <h3>Loading.......</h3>}
        {isError && <p>{error.message}</p>}
        <ul>
            {data?.map(item => (
              <li key = {item.id}>
                <span>{item.title}</span>
                <button onClick= {() => noteRemoveMutation.mutate(item.id)}>Delete</button>
              </li>
            ))}
        </ul>
    </div>
  );
}

export default App;
