function AllStudentList(props) {

    const deleteStudentHandler = (studentId) => {
        props.setAllStudentList(props.allStudentList.filter(student => student.id !== studentId))
    }

    const editHandler = (studentId) => {
        const toBeEditedStudent = props.allStudentList.find((item) => item.id === studentId);
        props.setEditMode(true)
        props.setEditableStudent(toBeEditedStudent);
        props.setStudentName(toBeEditedStudent.name)
    }



    const presentHandler = (studentId) => {
        const item = props.allStudentList.find((student) => student.id === studentId)
        if (item.isPresent === true) {
            alert('The student is already in the present List')
        } else if (item.isPresent === false) {
            alert('The student is already in the absent List')
        } else if (item.isPresent === undefined) {
            props.setAllStudentList(props.allStudentList.map((person) => {
                if (person.id === studentId) {
                    person.isPresent = true
                }
                return person

            }))
        }
    }

    const absentHandler = (studentId) => {
        const item = props.allStudentList.find((student) => student.id === studentId)
        if (item.isPresent === true) {
            alert('The student is already in the present List')
        } else if (item.isPresent === false) {
            alert('The student is already in the absent List')
        } else if (item.isPresent === undefined) {
            props.setAllStudentList(props.allStudentList.map((person) => {
                if (person.id === studentId) {
                    person.isPresent = false;
                }
                return person

            }))
        }
    }
    return (
        <div style={{ border: '1px solid #000000' }} class="all-students">
            <h2>All Students</h2>
            {props.allStudentList.map((item) => (
                <li>
                    <span>{item.name}</span>
                    <button onClick={() => editHandler(item.id)}>Edit</button>
                    <button onClick={() => deleteStudentHandler(item.id)}>Delete</button>
                    <button onClick={() => presentHandler(item.id)}>Present</button>
                    <button onClick={() => absentHandler(item.id)}>Absent</button>
                </li>
            ))}
        </div>
    )
}

export default AllStudentList