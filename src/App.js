import './App.css';
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false)


  // {} {od: 1}

  // {id:}

  // [] === [] // false

  const noteCreateHandler = (event) => {
    event.preventDefault();
    if (title) {
      const newNote = {
        id: Date.now(),
        title: title,
        isComplete: false
      }

      setNotes([newNote, ...notes])
      setTitle('')


    } else {
      alert('You are dumb')
    }
  }


  const noteDeleteHandler = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  const editHandler = (noteId) => {
    const toBeEditedNote = notes.find((note) => note.id === noteId);
    setEditMode(true)
    setEditableNote(toBeEditedNote);
    setTitle(toBeEditedNote.title)
  }

  const updateHandler = (event) => {
    event.preventDefault()
    // setNotes()
    if (title) {
      const newNotesArray = notes.map((note) => {
        if (note.id === editableNote.id) {
          note.title = title
        }
        return note
      })

      setNotes(newNotesArray);
      setEditMode(false)
      setEditableNote(null)
      setTitle('')
    } else {
      alert('You are non-focused')
    }
  }


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
        {notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note.id)}>edit</button>
            <button onClick={() => noteDeleteHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
