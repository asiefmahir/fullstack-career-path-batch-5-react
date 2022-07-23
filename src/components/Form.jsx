function Form(props) {
    const createStudentHandler = (event) => {
        event.preventDefault();
        if (props.studentName) {
            const newStudent = {
                id: Date.now(),
                name: props.studentName,
                isPresent: undefined,
            }

            props.setAllStudentList([newStudent, ...props.allStudentList]);
            props.setStudentName('')
        } else {
            alert('You are irresponsible')
        }
    }

    const updateStudentHandler = (event) => {
        event.preventDefault();

        if (props.studentName) {
            props.setAllStudentList(props.allStudentList.map((student) => {
                if (student.id === props.editableStudent.id) {
                    student.name = props.studentName
                }

                return student
            }))

            props.setEditMode(false)
            props.setEditableStudent(null)
            props.setStudentName('')
        } else {
            alert('You are irresponsible')
        }
    }

    return (
        <form onSubmit={(event) => props.editMode ? updateStudentHandler(event) : createStudentHandler(event)} action="" className="form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <input type="text" name="" id="" placeholder='Enter a valid student name' value={props.studentName} onChange={(event) => props.setStudentName(event.target.value)} />
            <button type='submit'>{props.editMode ? 'Update Student' : 'Add Student'}</button>
        </form>
    )
}

export default Form