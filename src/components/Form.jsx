import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function Form() {
    const {studentStates, dispatch} = useContext(StudentContext)
    

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            !studentStates.editMode ? dispatch({type:  'CREATE_STUDENT', payload: studentStates.studentName}) : dispatch({type: 'UPDATE_STUDENT', payload: studentStates.studentName})
        }} action="" className="form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <input type="text" name="" id="" placeholder='Enter a valid student name' value={studentStates.studentName} onChange={(event) => dispatch({type: 'CHANGE_STUDENT_NAME', payload: event.target.value})} />
            <button type='submit'>{studentStates.editMode ? 'Update Student' : 'Add Student'}</button>
        </form>
    )
}

export default Form