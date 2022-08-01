import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function Form() {
    const studentCtx = useContext(StudentContext)
    const createStudentHandler = (event) => {
        event.preventDefault();
        if (studentCtx.studentName) {
            const newStudent = {
                id: Date.now(),
                name: studentCtx.studentName,
                isPresent: undefined,
            }

            studentCtx.setAllStudentList([newStudent, ...studentCtx.allStudentList]);
            studentCtx.setStudentName('')
        } else {
            alert('You are irresponsible')
        }
    }

    const updateStudentHandler = (event) => {
        event.preventDefault();

        if (studentCtx.studentName) {
            studentCtx.setAllStudentList(studentCtx.allStudentList.map((student) => {
                if (student.id === studentCtx.editableStudent.id) {
                    student.name = studentCtx.studentName
                }

                return student
            }))

            studentCtx.setEditMode(false)
            studentCtx.setEditableStudent(null)
            studentCtx.setStudentName('')
        } else {
            alert('You are irresponsible')
        }
    }

    return (
        <form onSubmit={(event) => studentCtx.editMode ? updateStudentHandler(event) : createStudentHandler(event)} action="" className="form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <input type="text" name="" id="" placeholder='Enter a valid student name' value={studentCtx.studentName} onChange={(event) => studentCtx.setStudentName(event.target.value)} />
            <button type='submit'>{studentCtx.editMode ? 'Update Student' : 'Add Student'}</button>
        </form>
    )
}

export default Form