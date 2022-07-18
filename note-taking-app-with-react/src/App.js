/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import './App.css';

function App() {
  /*
   note = {
      id:Date.now(),
      title: 'title-1',
      isComplete:false,
   }
   */
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const noteCreateHandler = event => {
    event.preventDefault();
    if (title.trim()) {
      const newNote = {
        id: Date.now(),
        title: title,
        isComplete: true,
      };
      setNotes([newNote, ...notes]);
      setTitle('');
      setIsComplete(false);
    } else {
      setTitle('');
      var msg = 'Sorry! Your note is Empty!';
      msg += '\n';
      msg += 'Please Check again! ';
      alert(msg);
    }
  };

  const noteDeleteHandler = noteId => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const editHandler = noteId => {
    const toBeEditedNote = notes.find(note => note.id === noteId);
    setIsComplete((toBeEditedNote.isComplete = false));
    setEditMode(true);
    setEditableNote(toBeEditedNote);
    setTitle(toBeEditedNote.title);
  };
  const updateHandler = event => {
    event.preventDefault();
    if (title.trim()) {
      const newNotes = notes.map(note => {
        if (note.id === editableNote.id) {
          note.title = title;
          note.isComplete = true;
        }
        return note;
      });
      setNotes(newNotes);
      setEditMode(false);
      setTitle('');
      setIsComplete(false);
    } else {
      setTitle('');
      var msg = 'Sorry! Your note is Empty!';
      msg += '\n';
      msg += 'Please Check again! ';
      alert(msg);
    }
  };

  return (
    <div className="app">
      <div className="note-form">
        <form
          onSubmit={event =>
            editMode ? updateHandler(event) : noteCreateHandler(event)
          }
        >
          <input
            onChange={event => setTitle(event.target.value)}
            type="text"
            value={title}
            name=""
            id=""
            placeholder="Write your note here"
          />
          <button type="submit">{editMode ? 'Update Note' : 'Add note'}</button>
        </form>
      </div>

      {notes.map(note => (
        <div
          className="note"
          style={
            note.isComplete
              ? { backgroundColor: 'lightgreen' }
              : { backgroundColor: 'lightgray' }
          }
        >
          <div className="btn-container">
            <p>{note.title} </p>
            <button onClick={() => editHandler(note.id)} className="edit">
              Edit
            </button>
            <button
              onClick={() => noteDeleteHandler(note.id)}
              className="delete"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
