import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function PresentStudentList() {
    const {studentStates, dispatch} = useContext(StudentContext)
    return (
        <div style={{ border: '1px solid #000000' }} class="present-students">
            <h2>
                Present List
            </h2>
            <ul>
                {studentStates.allStudentList.filter(item => item.isPresent === true).map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => dispatch({type: 'TOGGLE_PRESENT_STATE', payload: student.id })}>Accidentally Added</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PresentStudentList