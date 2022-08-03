import { createContext, useReducer } from 'react'
import {studentReducer} from '../reducers/studentReducer'

export const StudentContext = createContext();

const initState = {
    studentName: '',
    allStudentList: [],
    editMode: false,
    editableStudent: null
}

function StudentProvider({children}) {
    const [studentStates, dispatch] = useReducer(studentReducer, initState);
    console.log(studentStates);
    // const [studentName, setStudentName] = useState('');
    // const [allStudentList, setAllStudentList] = useState([]);
    // const [editMode, setEditMode] = useState(false)
    // const [editableStudent, setEditableStudent] = useState(null)

    return (
        <StudentContext.Provider value = {{studentStates, dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider