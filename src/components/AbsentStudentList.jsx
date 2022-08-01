import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function AbsentStudentList(props) {
    const {allStudentList} = useContext(StudentContext)
  return (
    <div style={{border: '1px solid #000000'}} class="absent-students">
          <h2>
            Absent List
          </h2>
            <ul>
            {allStudentList.filter(item => item.isPresent === false).map(student => (
              <li>
                <span>{student.name}</span>
                <button onClick={() => props.togglePresentMode(student.id)}>Accidentally Added</button>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default AbsentStudentList

