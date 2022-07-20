import './App.css';
import {useState} from 'react'

function App() {

  const [studentName, setStudentName] = useState('');
  const [allStudentList, setAllStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false)
  const [editableStudent, setEditableStudent] = useState(null)


  const createStudentHandler = (event) => {
    event.preventDefault();
    if (studentName) {
      const newStudent = {
        id: Date.now(),
        name: studentName,
        isPresent: undefined,
      }

      setAllStudentList([newStudent, ...allStudentList]);
      setStudentName('')
    } else {
      alert('You are irresponsible')
    }
  }



  const deleteStudentHandler = (studentId) => {
    setAllStudentList(allStudentList.filter(student => student.id !== studentId))
  }

  const editHandler = (studentId) => {
    const toBeEditedStudent = allStudentList.find((item) => item.id === studentId);
    setEditMode(true)
    setEditableStudent(toBeEditedStudent);
    setStudentName(toBeEditedStudent.name)
  }

  const updateStudentHandler = (event) => {
    event.preventDefault();

    if(studentName) {
      setAllStudentList(allStudentList.map((student) => {
        if (student.id === editableStudent.id) {
          student.name = studentName
        }

        return student
      }))

      setEditMode(false)
      setEditableStudent(null)
      setStudentName('')
    } else {
      alert('You are irresponsible')
    }
  }

  const presentHandler = (studentId) => {
    const item = allStudentList.find((student) => student.id === studentId)
    if (item.isPresent === true) {
      alert('The student is already in the present List')
    } else if (item.isPresent === false) {
      alert('The student is already in the absent List')
    } else if (item.isPresent === undefined) {
      setAllStudentList(allStudentList.map((person) => {
        if (person.id === studentId) {
          person.isPresent = true
        }
        return person

      }))
    }
  }

  const absentHandler = (studentId) => {
    const item = allStudentList.find((student) => student.id === studentId)
    if (item.isPresent === true) {
      alert('The student is already in the present List')
    } else if (item.isPresent === false) {
      alert('The student is already in the absent List')
    } else if (item.isPresent === undefined) {
      setAllStudentList(allStudentList.map((person) => {
        if (person.id === studentId) {
          person.isPresent = false;
        }
        return person

      }))
    }
  }

  const togglePresentMode = (studentId) => {
    setAllStudentList(allStudentList.map((item) => {
      if (item.id === studentId) {
        item.isPresent = !item.isPresent
      }

      return item
    }))
  }


  return (
    <div className="App">
      <form onSubmit={(event) => editMode ? updateStudentHandler(event): createStudentHandler(event)} action="" className = "form" style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        <input type="text" name="" id="" placeholder='Enter a valid student name'  value={studentName} onChange = {(event) => setStudentName(event.target.value)}/>
        <button type='submit'>{editMode ? 'Update Student': 'Add Student'}</button>
      </form>

      <div style={{display: 'flex', justifyContent: 'space-around'}} class="student-section">
        <div style={{border: '1px solid #000000'}} class="all-students">
          <h2>All Students</h2>
          {allStudentList.map((item) => (
            <li>
              <span>{item.name}</span>
              <button onClick = {() => editHandler(item.id)}>Edit</button>
              <button onClick = {() => deleteStudentHandler(item.id)}>Delete</button>
              <button onClick = {() => presentHandler(item.id)}>Present</button>
              <button onClick = {() => absentHandler(item.id)}>Absent</button>
            </li>
          ))}
        </div>
        <div style={{border: '1px solid #000000'}} class="present-students">
          <h2>
            Present List
          </h2>
          <ul>
            {allStudentList.filter(item => item.isPresent === true).map(student => (
              <li>
                <span>{student.name}</span>
                <button onClick={() => togglePresentMode(student.id)}>Accidentally Added</button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{border: '1px solid #000000'}} class="absent-students">
          <h2>
            Absent List
          </h2>
            <ul>
            {allStudentList.filter(item => item.isPresent === false).map(student => (
              <li>
                <span>{student.name}</span>
                <button onClick={() => togglePresentMode(student.id)}>Accidentally Added</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
