import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {

  const [studentName, setStudentName] = useState('');
  const [allStudentList, setAllStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false)
  const [editableStudent, setEditableStudent] = useState(null)

  return (
    <div className="App">
      <Form 
        editMode={editMode}
        studentName = {studentName}
        setEditMode = {setEditMode}
        setStudentName = {setStudentName}
        allStudentList = {allStudentList}
        setAllStudentList = {setAllStudentList}
        editableStudent = {editableStudent}
        setEditableStudent = {setEditableStudent}
      />

      <StudentSection 
        studentName = {studentName}
        setStudentName = {setStudentName}
        editMode = {editMode}
        setEditMode = {setEditMode}
        editableStudent = {editableStudent}
        setEditableStudent = {setEditableStudent}
        allStudentList = {allStudentList}
        setAllStudentList = {setAllStudentList}
      />

    </div>
  );
}

export default App;
