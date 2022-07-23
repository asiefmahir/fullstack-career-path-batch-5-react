import React from 'react'

function AbsentStudentList(props) {
  return (
    <div style={{border: '1px solid #000000'}} class="absent-students">
          <h2>
            Absent List
          </h2>
            <ul>
            {props.allStudentList.filter(item => item.isPresent === false).map(student => (
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