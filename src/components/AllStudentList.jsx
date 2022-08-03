import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'


function AllStudentList() {
    const {studentStates, dispatch} = useContext(StudentContext)

    
    return (
        <div style={{ border: '1px solid #000000' }} class="all-students">
            <h2>All Students</h2>
            {studentStates.allStudentList.map((item) => (
                <li>
                    <span>{item.name}</span>
                    <button onClick={() => dispatch({type: 'EDIT_STUDENT', payload: item.id})}>Edit</button>
                    <button onClick={() => dispatch({type: 'DELETE_STUDENT', payload: item.id})}>Delete</button>
                    <button onClick={() => dispatch({type: 'SEND_TO_PRESENT_LIST', payload: item.id})}>Present</button>
                    <button onClick={() => dispatch({type: 'SEND_TO_ABSENT_LIST', payload: item.id})}>Absent</button>
                </li>
            ))}
        </div>
    )
}

export default AllStudentList