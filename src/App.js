import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true)


  // {} {od: 1}

  // {id:}

  // [] === [] // false

  const noteCreateHandler = (event) => {
    event.preventDefault();
    if (title) {
      const newNote = {
        id: Date.now() + '',
        title: title,
        isComplete: false
      }

      fetch(`http://localhost:3000/notes`, {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(() => {
          getNotes()
          setTitle('')
        })


    } else {
      alert('You are dumb')
    }
  }


  const noteDeleteHandler = (noteId) => {
    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE"
    })
      .then(() => getNotes())
    // setNotes(notes.filter((note) => note.id !== noteId))
  }

  const editHandler = (noteId) => {
    const toBeEditedNote = notes.find((note) => note.id === noteId);
    setEditMode(true)
    setEditableNote(toBeEditedNote);
    setTitle(toBeEditedNote.title)
  }

  const updateHandler = (event) => {
    event.preventDefault()
    const toBeUpdatedNote = {
      id: editableNote.id,
      title: title,
      isComplete: editableNote.isComplete
    }
    
    if (title) {
 
      fetch(`http://localhost:3000/notes/${editableNote.id}`, {
        method: "PATCH",
        body: JSON.stringify(toBeUpdatedNote),
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(() => {
          getNotes();
          setEditMode(false)
          setEditableNote(null)
          setTitle('')
        })

    } else {
      alert('You are non-focused')
    }
  }

  const getNotes = () => {
    fetch(`http://localhost:3000/notes`)
      .then(response => response.json())
      .then(data => {
        setNotes(data);
        setErrorMessage('');
        setIsLoading(false)
      })
      .catch(err => {
        setErrorMessage(err.message);
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getNotes()
  }, [])


  /**
   * note = {
   *  id: Date.now(),
   *  title: 'title-1',
   *  isComplete: false
   * }
   */

  return (
    <div className="App">
      <form onSubmit={(event) => editMode ? updateHandler(event) : noteCreateHandler(event)}>
        <input onChange={(event) => setTitle(event.target.value)} type="text" value={title} name="" id="" placeholder='Enter a valid note title' />
        <button type="submit">{editMode ? 'Update Note' : 'Add Note'}</button>
      </form>
      <ul>
        {isLoading && <h3>Loading.............</h3>}
        {notes?.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note.id)}>edit</button>
            <button onClick={() => noteDeleteHandler(note.id)}>Delete</button>
          </li>
        ))}
        {errorMessage && <h4>{errorMessage}</h4>}
      </ul>
    </div>
  );
}

export default App;