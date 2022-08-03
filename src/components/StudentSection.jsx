import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection() {
   
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} class="student-section">
            <AllStudentList />
            <PresentStudentList />
            <AbsentStudentList />
        </div>

    )
}

export default StudentSection