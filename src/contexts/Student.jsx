import { createContext, useState } from 'react'

export const StudentContext = createContext()

function StudentProvider({children}) {
    const [studentName, setStudentName] = useState('');
    const [allStudentList, setAllStudentList] = useState([]);
    const [editMode, setEditMode] = useState(false)
    const [editableStudent, setEditableStudent] = useState(null)

    return (
        <StudentContext.Provider value = {{studentName, setStudentName, allStudentList, setAllStudentList, editMode, setEditMode, editableStudent, setEditableStudent}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider