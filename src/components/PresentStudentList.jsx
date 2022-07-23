import React from 'react'

function PresentStudentList(props) {
    return (
        <div style={{ border: '1px solid #000000' }} class="present-students">
            <h2>
                Present List
            </h2>
            <ul>
                {props.allStudentList.filter(item => item.isPresent === true).map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => props.togglePresentMode(student.id)}>Accidentally Added</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PresentStudentList